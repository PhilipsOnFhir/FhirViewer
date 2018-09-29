import { CodeableConcept } from './CodeableConcept'
import { DataRequirement_CodeFilter } from './DataRequirement_CodeFilter'
import { DataRequirement_DateFilter } from './DataRequirement_DateFilter'
import { DataRequirement_Sort } from './DataRequirement_Sort'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Reference } from './Reference'

export class DataRequirement      extends Element
{

   static def : string = 'DataRequirement';
   type : string ;
   profile : string [];
   subjectCodeableConcept : CodeableConcept ;
   subjectReference : Reference ;
   mustSupport : string [];
   codeFilter : DataRequirement_CodeFilter [];
   dateFilter : DataRequirement_DateFilter [];
   limit : string ;
   sort : DataRequirement_Sort [];
}
