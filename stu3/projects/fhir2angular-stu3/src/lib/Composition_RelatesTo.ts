import { BackboneElement } from './BackboneElement'
import { DocumentRelationshipTypeEnum } from './DocumentRelationshipTypeEnum'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Composition_RelatesTo      extends BackboneElement
{

   static def : string = 'Composition_RelatesTo';
   code : DocumentRelationshipTypeEnum ;
   targetIdentifier : Identifier ;
   targetReference : Reference ;
}
