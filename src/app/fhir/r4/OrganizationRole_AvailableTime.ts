import { BackboneElement } from './BackboneElement'
import { DaysOfWeekEnum } from './DaysOfWeekEnum'
import { DomainResource } from './DomainResource'

export class OrganizationRole_AvailableTime      extends BackboneElement
{

   static def : string = 'OrganizationRole_AvailableTime';
   daysOfWeek : DaysOfWeekEnum [];
   allDay : string ;
   availableStartTime : string ;
   availableEndTime : string ;
}
