import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class EligibilityResponse_Financial      extends BackboneElement
{

   static def : string = 'EligibilityResponse_Financial';
   type : CodeableConcept ;
   allowedUnsignedInt : string ;
   allowedString : string ;
   allowedMoney : string ;
   usedUnsignedInt : string ;
   usedMoney : string ;
}
