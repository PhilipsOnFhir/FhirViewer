import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Period } from './Period'

export class DataRequirement_DateFilter      extends Element
{

   static def : string = 'DataRequirement_DateFilter';
   path : string ;
   valueDateTime : string ;
   valuePeriod : Period ;
   valueDuration : string ;
}
