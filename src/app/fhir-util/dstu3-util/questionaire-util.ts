import {Questionnaire} from '../../fhir/dstu3/Questionnaire';
import {QuestionnaireResponse_Item} from '../../fhir/dstu3/QuestionnaireResponse_Item';
import {QuestionnaireResponse_Answer} from '../../fhir/dstu3/QuestionnaireResponse_Answer';
import {Reference} from '../../fhir/dstu3/Reference';
import {QuestionnaireResponse} from '../../fhir/dstu3/QuestionnaireResponse';
import {QuestionnaireResponseStatusEnum} from '../../fhir/dstu3/QuestionnaireResponseStatusEnum';
import {Questionnaire_Item} from '../../fhir/dstu3/Questionnaire_Item';
import {CurrentPatientService} from '../../services/current-patient.service';

export class QuestionnaireUtil {

  static getSummary( questionnaire: Questionnaire): string {
    let summary = 'Unknown';
    // questionnaire.
    if ( questionnaire.title ) {
      summary = questionnaire.title;
    }
    return summary;
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
