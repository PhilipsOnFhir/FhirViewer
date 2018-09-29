import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class EligibilityResponse_Authorization      extends BackboneElement
{

   static def : string = 'EligibilityResponse_Authorization';
   authorizationSequence : string ;
   required : string ;
   note : Annotation [];
}
