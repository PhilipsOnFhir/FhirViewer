import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class MedicinalProductAuthorization_Application      extends BackboneElement
{

   static def : string = 'MedicinalProductAuthorization_Application';
   number : Identifier ;
   type : CodeableConcept ;
   date : string ;
}
