import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { QuestionnaireAnswersStatusEnum } from './QuestionnaireAnswersStatusEnum'
import { QuestionnaireAnswers_Group } from './QuestionnaireAnswers_Group'
import { Reference } from './Reference'

export class QuestionnaireAnswers      extends DomainResource
{

   static def : string = 'QuestionnaireAnswers';
   identifier : Identifier ;
   questionnaire : Reference ;
   status : QuestionnaireAnswersStatusEnum ;
   subject : Reference ;
   author : Reference ;
   authored : string ;
   source : Reference ;
   encounter : Reference ;
   group : QuestionnaireAnswers_Group ;
}
