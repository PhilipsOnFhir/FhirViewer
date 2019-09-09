import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class Coverage_Grouping      extends BackboneElement
{

   static def : string = 'Coverage_Grouping';
   group : string ;
   groupDisplay : string ;
   subGroup : string ;
   subGroupDisplay : string ;
   plan : string ;
   planDisplay : string ;
   subPlan : string ;
   subPlanDisplay : string ;
   class : string ;
   classDisplay : string ;
   subClass : string ;
   subClassDisplay : string ;
}
