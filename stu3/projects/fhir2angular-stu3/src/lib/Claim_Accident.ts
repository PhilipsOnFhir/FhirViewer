import { Address } from './Address'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Claim_Accident      extends BackboneElement
{

   static def : string = 'Claim_Accident';
   date : string ;
   type : CodeableConcept ;
   locationAddress : Address ;
   locationReference : Reference ;
}
