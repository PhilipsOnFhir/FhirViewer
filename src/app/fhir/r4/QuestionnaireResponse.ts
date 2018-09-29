import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { QuestionnaireResponseStatusEnum } from './QuestionnaireResponseStatusEnum'
import { QuestionnaireResponse_Item } from './QuestionnaireResponse_Item'
import { Reference } from './Reference'

export class QuestionnaireResponse      extends DomainResource
{

   static def : string = 'QuestionnaireResponse';
   identifier : Identifier ;
   basedOn : Reference [];
   partOf : Reference [];
   questionnaire : string ;
   status : QuestionnaireResponseStatusEnum ;
   subject : Reference ;
   context : Reference ;
   authored : string ;
   author : Reference ;
   source : Reference ;
   item : QuestionnaireResponse_Item [];
}
