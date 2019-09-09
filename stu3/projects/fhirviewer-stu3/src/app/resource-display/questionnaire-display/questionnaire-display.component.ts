import {Component, Input, OnInit} from '@angular/core';
import {SmartOnFhirService} from "../../../../../smartonfhir-stu3/src/lib/fhir-stu3/smart-on-fhir.service";
import {DisplayTypeEnum} from "../resource-display.component";
import {
  Parameters,
  Parameters_Parameter,
  Questionnaire,
  Questionnaire_Item,
  QuestionnaireResponse,
  QuestionnaireResponse_Answer,
  QuestionnaireResponse_Item,
  QuestionnaireResponseStatusEnum,
  Reference
} from "fhir2angular-stu3";
import {ActivatedRoute, Router} from "@angular/router";
import {ContextService} from "../../../../../smartonfhir-stu3/src/lib/service/context.service";

@Component({
  selector: 'app-questionnaire-display',
  templateUrl: './questionnaire-display.component.html',
  styleUrls: ['./questionnaire-display.component.css']
})
export class QuestionnaireDisplayComponent implements OnInit {
  @Input() resource;
  @Input()  format = DisplayTypeEnum.NICE;
  private questionnaire: Questionnaire;
  private subject: string = null;
  private mode: string = "-";

  constructor( private sofs: SmartOnFhirService, private context: ContextService, private route: ActivatedRoute, private router:Router ) { }

  ngOnInit() {
    this.questionnaire = this.resource as Questionnaire;
    this.route.queryParamMap.subscribe(params => {
      {
        this.subject = params.get("subject");
        const ref = new Reference(); ref.reference=this.subject;
        this.sofs.getReference(ref).subscribe( res => {
          this.context.setSubject(res);
        })
        if ( this.format===DisplayTypeEnum.PERFORM){
          this.fillIn();
        }
      }
    });
  }

  fillIn() {
    let qr : QuestionnaireResponse = this.createQuestionnaireResponse();
    if ( this.subject ){
// try populate
      const questionnaireParameter: Parameters_Parameter = new Parameters_Parameter();
      questionnaireParameter.name = 'questionnaire';
      questionnaireParameter.resource = this.questionnaire;

      const subjectParameter: Parameters_Parameter = new Parameters_Parameter();
      subjectParameter.name = 'subject';
      const patientReference = new Reference();
      patientReference.reference = this.subject;
      subjectParameter.valueReference = patientReference;

      const parameters: Parameters = new Parameters();
      parameters.parameter = new Array(0);
      parameters.parameter.push(questionnaireParameter);
      parameters.parameter.push(subjectParameter);
      parameters.resourceType = Parameters.def;

      this.sofs.doPostOperation(Questionnaire.def, 'populate', parameters).subscribe(
        response => {
          console.log(response);
          qr = response as QuestionnaireResponse;
          this.storeAndOpen(qr);
        },
        error => {
          console.log(error);
          this.storeAndOpen(qr);
        }
      );
    } else {
      this.storeAndOpen(qr);
    }
  }

  private storeAndOpen(qr: QuestionnaireResponse) {
    this.context.putContextResource(qr);
    this.router.navigate(["fhir", qr.resourceType, qr.id], {queryParamsHandling: 'preserve'});
  }
  createQuestionnaireResponse() : QuestionnaireResponse{
    let questionnaireResponse = new QuestionnaireResponse();
    questionnaireResponse.resourceType  = "QuestionnaireResponse";
    questionnaireResponse.questionnaire = new Reference();
    questionnaireResponse.questionnaire.reference = "Questionnaire/"+this.questionnaire.id;

    questionnaireResponse.status = QuestionnaireResponseStatusEnum.IN_PROGRESS;

    if ( this.subject ){
      questionnaireResponse.subject = new Reference();
      questionnaireResponse.subject.reference = this.subject;
    }
    // questionnaireResponse.authored = String(Date.now());

    // TODO
    // if ( this.currentPatient.hasPatient() ){
    //   let reference = new Reference();
    //   reference.reference = "Patient/"+this.currentPatient.getPatient().id;
    //   questionnaireResponse.subject = reference;
    // }

    questionnaireResponse.item = new Array<QuestionnaireResponse_Item>(0);
    this.questionnaire.item.forEach( item => {
      questionnaireResponse.item.push( this.addQuestionnaireResponseItem( item ) );
    });
    return questionnaireResponse;
  }

  private addQuestionnaireResponseItem( item: Questionnaire_Item) : QuestionnaireResponse_Item {
    let questionnaireResponseItem: QuestionnaireResponse_Item = new QuestionnaireResponse_Item();
    questionnaireResponseItem.linkId = item.linkId;
    questionnaireResponseItem.text   = item.text;
    questionnaireResponseItem.answer = new Array<QuestionnaireResponse_Answer>(0);
    if ( item.initialString ){
      let answer = new QuestionnaireResponse_Answer();
      answer.valueString = item.initialString;
      questionnaireResponseItem.answer.push( answer )
    }
    questionnaireResponseItem.item = new Array<QuestionnaireResponse_Item>(0);
    if ( item.item ) {
      item.item.forEach(subItem => {
        questionnaireResponseItem.item.push(this.addQuestionnaireResponseItem(subItem));
      });
    }
    //    questionnaireResponseItem.answer
    // questionnaireItem.
    return questionnaireResponseItem;
  }
}
