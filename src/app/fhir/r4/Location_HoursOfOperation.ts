import { BackboneElement } from './BackboneElement'
import { DaysOfWeekEnum } from './DaysOfWeekEnum'
import { DomainResource } from './DomainResource'

export class Location_HoursOfOperation      extends BackboneElement
{

   static def : string = 'Location_HoursOfOperation';
   daysOfWeek : DaysOfWeekEnum [];
   allDay : string ;
   openingTime : string ;
   closingTime : string ;
}
