import {Component, Input, OnInit} from '@angular/core';
import {DomainResource} from '../../../fhir/dstu3/DomainResource';
import {QuestionnaireResponse} from '../../../fhir/dstu3/QuestionnaireResponse';
import {SmartOnFhirService} from '../../../fhir-util/smart-on-fhir.service';
import {Questionnaire} from '../../../fhir/dstu3/Questionnaire';
import {QuestionnaireResponse_Item} from '../../../fhir/dstu3/QuestionnaireResponse_Item';
import {Questionnaire_Item} from '../../../fhir/dstu3/Questionnaire_Item';
import {Extension} from '../../../fhir/dstu3/Extension';
import {Parameters} from '../../../fhir/dstu3/Parameters';
import {Parameters_Parameter} from '../../../fhir/dstu3/Parameters_Parameter';
import {ContextService} from '../../../fhir-util/context.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-questionnaire-response-display',
  templateUrl: './questionnaire-response-display.component.html',
  styleUrls: ['./questionnaire-response-display.component.sass']
})
export class QuestionnaireResponseDisplayComponent implements OnInit {
  @Input() resource: DomainResource;
  questionnaireResponse: QuestionnaireResponse;
  questionnaire: Questionnaire;
  itemDatas: ItemData[] = new Array(0);
  plainJson: string;
  extSm: ExtensionSM[];
  title: string;

  constructor( private sofs: SmartOnFhirService, private contextService: ContextService, private router: Router ) { }

  ngOnInit() {
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
    this.questionnaire.extension
      .forEach( extension => {
       const es = new ExtensionSM();
       es.extension = extension;
       es.resource = null;
       this.extSm.push(es);
    });

  }

  updateValue( event ) {
    console.log(event);
    console.log(this.questionnaireResponse);
    this.fillItemDatas();
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

  performTransform( es: ExtensionSM) {
    console.log( es.extension );
    if ( es.extension.url === 'http://hl7.org/fhir/StructureDefinition/questionnaire-targetStructureMap') {
      es.retreiveActive = true;
      const contentParameter: Parameters_Parameter = new Parameters_Parameter();
      contentParameter.name = 'content';
      contentParameter.resource = this.questionnaireResponse;

      const parameters: Parameters = new Parameters();
      parameters.parameter = new Array(0);
      parameters.parameter.push( contentParameter );
      parameters.resourceType = Parameters.def;
      let urlToCall = es.extension.valueReference.reference;

      if ( es.extension.valueReference.reference.startsWith("#")){
        const smId = es.extension.valueReference.reference.substring(1);
        const structureMap = this.questionnaire.contained.find( containedResource => containedResource.id === smId );
        const sourceParameter: Parameters_Parameter = new Parameters_Parameter();
        sourceParameter.name = 'source';
        sourceParameter.resource = structureMap;
        parameters.parameter.push(sourceParameter);
        urlToCall = 'StructureMap';
      }

      this.sofs.doPostOperation( urlToCall, 'transform', parameters ).subscribe(
        response => {
          console.log(response);
          const res = this.contextService.postContextResource(response);
          es.resource = res;
          // this.router.navigate(["fhir", response.resourceType, cp.id], { queryParamsHandling: 'preserve' });
          es.retreiveActive = false;
        },
        error    => {
          console.log(error);
          es.retreiveActive = false;
        }
      );
    }
  }

  performTransforms() {
    this.extSm
      .filter( es => es.resource )
      .forEach( es => {
        this.contextService.removeContextResource( es.resource );
        es.resource = null;
    });

    this.extSm.forEach( es => {
        this.performTransform( es );
      });
  }

  isRetrieving(): boolean {
    let result = true;
    this.extSm.forEach(esSm => result = result && esSm.retreiveActive );
    return result;
  }
}

class ExtensionSM {
  extension: Extension;
  resource: DomainResource = null;
  retreiveActive = false;
}

class ItemData {
  questionnaireResponseItem: QuestionnaireResponse_Item;
  questionnaireItem: Questionnaire_Item;
}

