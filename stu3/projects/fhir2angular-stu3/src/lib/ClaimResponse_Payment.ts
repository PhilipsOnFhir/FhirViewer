import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class ClaimResponse_Payment      extends BackboneElement
{

   static def : string = 'ClaimResponse_Payment';
   type : CodeableConcept ;
   adjustment : string ;
   adjustmentReason : CodeableConcept ;
   date : string ;
   amount : string ;
   identifier : Identifier ;
}
