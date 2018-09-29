import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ExplanationOfBenefit_Financial      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Financial';
   type : CodeableConcept ;
   allowedUnsignedInt : string ;
   allowedString : string ;
   allowedMoney : string ;
   usedUnsignedInt : string ;
   usedMoney : string ;
}
