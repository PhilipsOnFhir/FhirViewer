import { BackboneElement } from './BackboneElement'
import { DocumentRelationshipTypeEnum } from './DocumentRelationshipTypeEnum'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class DocumentReference_RelatesTo      extends BackboneElement
{

   static def : string = 'DocumentReference_RelatesTo';
   code : DocumentRelationshipTypeEnum ;
   target : Reference ;
}
