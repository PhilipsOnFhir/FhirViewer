import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { EligibilityResponse_Financial } from './EligibilityResponse_Financial'

export class EligibilityResponse_BenefitBalance      extends BackboneElement
{

   static def : string = 'EligibilityResponse_BenefitBalance';
   category : CodeableConcept ;
   subCategory : CodeableConcept ;
   excluded : boolean ;
   name : string ;
   description : string ;
   network : CodeableConcept ;
   unit : CodeableConcept ;
   term : CodeableConcept ;
   financial : EligibilityResponse_Financial [];
}
