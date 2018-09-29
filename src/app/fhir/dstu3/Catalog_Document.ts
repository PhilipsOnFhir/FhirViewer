import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Catalog_Document      extends BackboneElement
{

   static def : string = 'Catalog_Document';
   status : CodeableConcept ;
   provider : Reference ;
   contentType : CodeableConcept ;
   updateMode : CodeableConcept ;
   identifier : Identifier ;
   contentVersion : Identifier ;
   issueDate : string ;
   validFrom : string ;
   validTo : string ;
}
