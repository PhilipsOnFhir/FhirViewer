import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { EligibilityResponse_BenefitBalance } from './EligibilityResponse_BenefitBalance'
import { Reference } from './Reference'

export class EligibilityResponse_Insurance      extends BackboneElement
{

   static def : string = 'EligibilityResponse_Insurance';
   coverage : Reference ;
   contract : Reference ;
   benefitBalance : EligibilityResponse_BenefitBalance [];
}
