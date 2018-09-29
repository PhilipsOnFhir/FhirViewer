import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { QuestionnaireResponseStatusEnum } from './QuestionnaireResponseStatusEnum'
import { QuestionnaireResponse_Group } from './QuestionnaireResponse_Group'
import { Reference } from './Reference'

export class QuestionnaireResponse      extends DomainResource
{

   static def : string = 'QuestionnaireResponse';
   identifier : Identifier ;
   questionnaire : Reference ;
   status : QuestionnaireResponseStatusEnum ;
   subject : Reference ;
   author : Reference ;
   authored : string ;
   source : Reference ;
   encounter : Reference ;
   group : QuestionnaireResponse_Group ;
}
