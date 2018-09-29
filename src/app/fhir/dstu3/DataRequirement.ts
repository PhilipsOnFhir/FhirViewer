import { DataRequirement_CodeFilter } from './DataRequirement_CodeFilter'
import { DataRequirement_DateFilter } from './DataRequirement_DateFilter'
import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class DataRequirement      extends Element
{

   static def : string = 'DataRequirement';
   type : string ;
   profile : string [];
   mustSupport : string [];
   codeFilter : DataRequirement_CodeFilter [];
   dateFilter : DataRequirement_DateFilter [];
}
