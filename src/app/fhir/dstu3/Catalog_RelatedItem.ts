import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Catalog_RelatedItem      extends BackboneElement
{

   static def : string = 'Catalog_RelatedItem';
   relationtype : CodeableConcept ;
   type : CodeableConcept ;
   identifier : Reference ;
}
