import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class OccupationalData_WorkSchedule      extends BackboneElement
{

   static def : string = 'OccupationalData_WorkSchedule';
   code : CodeableConcept ;
   weeklyWorkDays : string ;
   dailyWorkHours : string ;
}
