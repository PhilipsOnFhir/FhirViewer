import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ImmunizationRecommendation_Recommendation } from './ImmunizationRecommendation_Recommendation'
import { Reference } from './Reference'

export class ImmunizationRecommendation      extends DomainResource
{

   static def : string = 'ImmunizationRecommendation';
   identifier : Identifier [];
   patient : Reference ;
   date : string ;
   authority : Reference ;
   recommendation : ImmunizationRecommendation_Recommendation [];
}
