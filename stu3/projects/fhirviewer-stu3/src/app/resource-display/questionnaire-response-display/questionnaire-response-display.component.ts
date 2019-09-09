import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

import {Parameters, Parameters_Parameter} from "fhir2angular-stu3";
import {QuestionnaireResponse, QuestionnaireResponse_Item} from "fhir2angular-stu3";
import {DomainResource} from "fhir2angular-stu3";
import {Questionnaire, Questionnaire_Item} from "fhir2angular-stu3";
import {Resource} from "fhir2angular-stu3";
import {Extension} from "fhir2angular-stu3";
import {SmartOnFhirService} from "../../../../../smartonfhir-stu3/src/lib/fhir-stu3/smart-on-fhir.service";
import {Reference} from "fhir2angular-stu3";
import {ContextService} from "../../../../../smartonfhir-stu3/src/lib/service/context.service";

@Component({
  selector: 'app-questionnaire-response-display',
  templateUrl: './questionnaire-response-display.component.html',
  styleUrls: ['./questionnaire-response-display.component.css']
})
export class QuestionnaireResponseDisplayComponent implements OnInit {
  @Input()  resource: DomainResource;

  questionnaireResponse: QuestionnaireResponse;
  questionnaire: Questionnaire;
  itemDatas: ItemData[] = new Array(0);
  plainJson: string;
  extSm: ExtensionSM[];
  title: string;


  constructor( private sofs: SmartOnFhirService, private context: ContextService, private router: Router ) { }

  ngOnInit() {
    console.log('QuestionnaireReponse ');
    this.questionnaireResponse = this.resource as QuestionnaireResponse;
    this.sofs.getReference( this.questionnaireResponse.questionnaire ).subscribe( questionnaire => {
      this.questionnaire = questionnaire as Questionnaire;
      this.title = this.questionnaire.title;
      this.fillItemDatas();
    });
    this.plainJson = JSON.stringify(this.questionnaireResponse);
  }

  private fillItemDatas() {
    this.itemDatas = new Array(0);
    this.questionnaireResponse.item.forEach(questionnaireResponseItem => {
      const itemData = new ItemData();
      itemData.questionnaireResponseItem = questionnaireResponseItem;
      this.questionnaire.item.forEach(qItem => {
        if (qItem.linkId === questionnaireResponseItem.linkId) {
          itemData.questionnaireItem = qItem;
        }
      });
      this.itemDatas.push(itemData);
    });
    this.extSm = new Array(0);
    if ( this.questionnaire.extension ) {
        this.questionnaire.extension
          .forEach(extension => {
            const es = new ExtensionSM();
            es.extension = extension;
            es.resource = null;
            this.extSm.push(es);
          });
    }
    this.checkAndDoTransforms();
  }

  updateValue( event ) {
    console.log(event);
    console.log(this.questionnaireResponse);
    this.fillItemDatas();
    this.checkAndDoTransforms();
    // let items: QuestionnaireResponse_Item[] = new Array(0);
    // let newQri : QuestionnaireResponse_Item = event as QuestionnaireResponse_Item;
    // this.questionnaireResponse.item.forEach( qri => {
    //   if( qri.linkId===newQri.linkId ){
    //     items.push(newQri);
    //   } else {
    //     items.push(qri);
    //   }
    // });
    // this.questionnaireResponse.item = items;
  }

  private checkAndDoTransforms() {
    let ready = true;
    // this.questionnaire.item.forEach(item => {
    //     ready = ready && this.checkReady(item);
    // });
    this.itemDatas.forEach(itemData => {
      if ( itemData.questionnaireItem.required ) {
        if ( !(itemData.questionnaireResponseItem.answer && itemData.questionnaireResponseItem.answer.length > 0) ) {
          ready = false;
        }
      }
    });
    console.log(ready);
    if (ready) {
      this.performTransforms();
    }
  }

  private getQuestionnaireResponseItem(linkId: string, qrItem: QuestionnaireResponse_Item ): QuestionnaireResponse_Item {
    let foundQri = null;
    if ( qrItem.linkId === linkId ) {
      return qrItem;
    } else {
      qrItem.item
        .map( subQrItem => this.getQuestionnaireResponseItem( linkId, subQrItem ))
        .filter( qr => qr )
        .forEach( qr => {
          return foundQri = qr;
        } );
      return foundQri;
    }
  }



  performTransform( es: ExtensionSM) {
    // console.log( es.extension );
    if ( es.extension.url === 'http://hl7.org/fhir/StructureDefinition/questionnaire-targetStructureMap') {
      es.retrieveActive = true;
      const contentParameter: Parameters_Parameter = new Parameters_Parameter();
      contentParameter.name = 'content';
      contentParameter.resource = this.questionnaireResponse;

      const parameters: Parameters = new Parameters();
      parameters.parameter = new Array(0);
      parameters.parameter.push( contentParameter );
      parameters.resourceType = Parameters.def;

      let urlToCall = es.extension.valueReference.reference;

      if ( es.extension.valueReference.reference.startsWith('#')) {
        const sourceParameter: Parameters_Parameter = new Parameters_Parameter();
        // const smId = es.extension.valueReference.reference.substring(1);
        // const structureMap = this.questionnaire.contained.find( containedResource => containedResource.id === smId );
        // sourceParameter.resource = structureMap;

        const smId = es.extension.valueReference.reference;
        const smRef = "Questionnaire/"+this.questionnaire.id+"/"+smId;
        sourceParameter.name = 'source';
        let ref = new Reference();
        ref.reference = smRef;
        sourceParameter.valueReference = ref;
        parameters.parameter.push(sourceParameter);
        urlToCall = 'StructureMap';
      }

      this.sofs.doPostOperation( urlToCall, 'transform', parameters ).subscribe(
        response => {
          console.log(response);
          es.resource = response;
          const cr= this.context.postContextResource(es.resource);

          // this.router.navigate(["fhir", response.resourceType, cp.id], { queryParamsHandling: 'preserve' });
          es.retrieveActive = false;
        },
        error    => {
          console.log(error);
          es.retrieveActive = false;
        }
      );
    }
  }

  performTransforms() {
    this.extSm
      .filter( es => es.resource )
      .forEach( es => {
        es.resource = null;
      });

    this.extSm.forEach( es => {
      this.performTransform( es );
    });
  }

  isRetrieving(): boolean {
    let result = true;
    this.extSm.forEach(esSm => result = result && esSm.retrieveActive );
    return result;
  }

  switchResource(resource: Resource) {
    this.router.navigate(["fhir", resource.resourceType, resource.id], {queryParamsHandling: 'preserve'});console.log(resource);
  }
}

class ExtensionSM {
  extension: Extension;
  resource: DomainResource = null;
  retrieveActive = false;
}

class ItemData {
  questionnaireResponseItem: QuestionnaireResponse_Item;
  questionnaireItem: Questionnaire_Item;
}

