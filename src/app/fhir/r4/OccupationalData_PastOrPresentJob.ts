import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { OccupationalData_WorkSchedule } from './OccupationalData_WorkSchedule'
import { Period } from './Period'
import { Reference } from './Reference'

export class OccupationalData_PastOrPresentJob      extends BackboneElement
{

   static def : string = 'OccupationalData_PastOrPresentJob';
   occupation : CodeableConcept ;
   industry : CodeableConcept ;
   effective : Period ;
   employer : Reference ;
   workClassification : CodeableConcept ;
   supervisoryLevel : CodeableConcept ;
   jobDuty : string [];
   occupationalHazard : string [];
   workSchedule : OccupationalData_WorkSchedule ;
}
