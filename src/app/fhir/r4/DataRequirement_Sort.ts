import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { SortDirectionEnum } from './SortDirectionEnum'

export class DataRequirement_Sort      extends Element
{

   static def : string = 'DataRequirement_Sort';
   path : string ;
   direction : SortDirectionEnum ;
}
