import { BackboneElement } from './BackboneElement'
import { DaysOfWeekEnum } from './DaysOfWeekEnum'
import { DomainResource } from './DomainResource'

export class HealthcareService_AvailableTime      extends BackboneElement
{

   static def : string = 'HealthcareService_AvailableTime';
   daysOfWeek : DaysOfWeekEnum [];
   allDay : string ;
   availableStartTime : string ;
   availableEndTime : string ;
}
