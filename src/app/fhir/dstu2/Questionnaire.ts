import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { QuestionnaireStatusEnum } from './QuestionnaireStatusEnum'
import { Questionnaire_Group } from './Questionnaire_Group'

export class Questionnaire      extends DomainResource
{

   static def : string = 'Questionnaire';
   identifier : Identifier [];
   version : string ;
   status : QuestionnaireStatusEnum ;
   date : string ;
   publisher : string ;
   telecom : ContactPoint [];
   subjectType : string [];
   group : Questionnaire_Group ;
}
