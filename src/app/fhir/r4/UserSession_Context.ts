import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class UserSession_Context      extends BackboneElement
{

   static def : string = 'UserSession_Context';
   type : string ;
   valueCodeableConcept : CodeableConcept ;
   valueQuantity : Quantity ;
}
