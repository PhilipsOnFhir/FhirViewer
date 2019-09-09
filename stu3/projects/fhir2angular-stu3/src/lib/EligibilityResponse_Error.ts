import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class EligibilityResponse_Error      extends BackboneElement
{

   static def : string = 'EligibilityResponse_Error';
   code : CodeableConcept ;
}
