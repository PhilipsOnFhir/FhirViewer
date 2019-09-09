import { BackboneElement } from './BackboneElement'
import { DaysOfWeekEnum } from './DaysOfWeekEnum'
import { DomainResource } from './DomainResource'

export class PractitionerRole_AvailableTime      extends BackboneElement
{

   static def : string = 'PractitionerRole_AvailableTime';
   daysOfWeek : DaysOfWeekEnum [];
   allDay : boolean ;
   availableStartTime : string ;
   availableEndTime : string ;
}
