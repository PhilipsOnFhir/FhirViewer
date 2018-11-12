import {Questionnaire} from '../../fhir/dstu3/Questionnaire';
import {QuestionnaireResponse_Item} from '../../fhir/dstu3/QuestionnaireResponse_Item';
import {QuestionnaireResponse_Answer} from '../../fhir/dstu3/QuestionnaireResponse_Answer';
import {Reference} from '../../fhir/dstu3/Reference';
import {QuestionnaireResponse} from '../../fhir/dstu3/QuestionnaireResponse';
import {QuestionnaireResponseStatusEnum} from '../../fhir/dstu3/QuestionnaireResponseStatusEnum';
import {Questionnaire_Item} from '../../fhir/dstu3/Questionnaire_Item';
import {CurrentPatientService} from '../../services/current-patient.service';
import {Parameters} from '../../fhir/dstu3/Parameters';
import {DomainResource} from '../../fhir/dstu3/DomainResource';
import {Parameters_Parameter} from '../../fhir/dstu3/Parameters_Parameter';
import {Patient} from '../../fhir/dstu3/Patient';
import {ContextService} from '../context.service';
import {SmartOnFhirService} from '../smart-on-fhir.service';
import {Observable} from 'rxjs/internal/Observable';
import {CapabilityStatement} from '../../fhir/dstu3/CapabilityStatement';


export class QuestionnaireUtil {

  static getSummary( questionnaire: Questionnaire): string {
    let summary = 'Unknown';
    // questionnaire.
    if ( questionnaire.title ) {
      summary = questionnaire.title;
    }
    return summary;
  }

  static fillIn( contextVariables: CurrentPatientService, contextService: ContextService, sofs: SmartOnFhirService, questionnaire: Questionnaire):
      Observable<QuestionnaireResponse> {
      return new Observable<QuestionnaireResponse>( observer => {
          let qr: QuestionnaireResponse =  QuestionnaireUtil.createQuestionnaireResponse( contextVariables, questionnaire );
          if ( contextVariables.hasPatient() ) {
              // try populate
              const questionnaireParameter: Parameters_Parameter = new Parameters_Parameter();
              questionnaireParameter.name = 'questionnaire';
              questionnaireParameter.resource = questionnaire;

              const subjectParameter: Parameters_Parameter = new Parameters_Parameter();
              subjectParameter.name = 'subject';
              const patientReference = new Reference();
              patientReference.reference = Patient.def + '/' + contextVariables.getPatient().id;
              subjectParameter.valueReference = patientReference;

              const parameters: Parameters = new Parameters();
              parameters.parameter = new Array(0);
              parameters.parameter.push(questionnaireParameter);
              parameters.parameter.push(subjectParameter);
              parameters.resourceType = Parameters.def;

              sofs.doPostOperation(Questionnaire.def, 'populate', parameters).subscribe(
                  response => {
                      console.log(response);
                      const res = contextService.postContextResource(response);
                      qr = res as QuestionnaireResponse;
                      // this.router.navigate(["fhir", response.resourceType, cp.id], { queryParamsHandling: 'preserve' });
                      // es.retrieveActive = false;
                      const qrPosted: QuestionnaireResponse = contextService.postContextResource(qr) as QuestionnaireResponse;
                      observer.next(qrPosted);
                      observer.complete();
                      // console.log( qrPosted );
                  },
                  error => {
                      console.log(error);
                      // es.retrieveActive = false;
                      const qrPosted: QuestionnaireResponse = contextService.postContextResource(qr) as QuestionnaireResponse;
                      observer.next(qrPosted);
                      observer.complete();
                      // console.log( qrPosted );
                  }
              );
          } else {
              const qrPosted: QuestionnaireResponse = contextService.postContextResource(qr) as QuestionnaireResponse;
              console.log(qrPosted);
              observer.next(qrPosted);
              observer.complete();
          }
      }
      // ,{
      //     err => {console.log(err); observer.error(); }
      // }
      );
  }

  static createQuestionnaireResponse( contextVariables: CurrentPatientService, questionnaire: Questionnaire ): QuestionnaireResponse {
        const questionnaireResponse = new QuestionnaireResponse();
        questionnaireResponse.resourceType  = 'QuestionnaireResponse';
        questionnaireResponse.questionnaire = new Reference();
        questionnaireResponse.questionnaire.reference = 'Questionnaire/' + questionnaire.id;

        questionnaireResponse.status = QuestionnaireResponseStatusEnum.IN_PROGRESS;
        // questionnaireResponse.authored = String(Date.now());

        if ( contextVariables.hasPatient() ) {
            const reference = new Reference();
            reference.reference = 'Patient/' + contextVariables.getPatient().id;
            questionnaireResponse.subject = reference;
        }

        questionnaireResponse.item = new Array<QuestionnaireResponse_Item>(0);
        questionnaire.item.forEach( item => {
            questionnaireResponse.item.push( this.addQuestionnaireResponseItem( item ) );
        });
        console.log('----------------------------------------------------------------------------');
        console.log(questionnaireResponse);
        return questionnaireResponse;
    }

    private static addQuestionnaireResponseItem( item: Questionnaire_Item): QuestionnaireResponse_Item {
        const questionnaireResponseItem: QuestionnaireResponse_Item = new QuestionnaireResponse_Item();
        questionnaireResponseItem.linkId = item.linkId;
        questionnaireResponseItem.text   = item.text;
        questionnaireResponseItem.answer = new Array<QuestionnaireResponse_Answer>(0);
        if ( item.initialString ) {
            const answer = new QuestionnaireResponse_Answer();
            answer.valueString = item.initialString;
            questionnaireResponseItem.answer.push( answer );
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
