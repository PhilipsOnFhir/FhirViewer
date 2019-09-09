import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ImmunizationRecommendation_Protocol      extends BackboneElement
{

   static def : string = 'ImmunizationRecommendation_Protocol';
   doseSequence : string ;
   description : string ;
   authority : Reference ;
   series : string ;
}
