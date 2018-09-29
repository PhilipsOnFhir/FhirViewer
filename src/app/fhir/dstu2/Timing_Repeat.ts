import { DomainResource } from './DomainResource'
import { Duration } from './Duration'
import { Element } from './Element'
import { EventTimingEnum } from './EventTimingEnum'
import { Period } from './Period'
import { Range } from './Range'
import { UnitsOfTimeEnum } from './UnitsOfTimeEnum'

export class Timing_Repeat      extends Element
{

   static def : string = 'Timing_Repeat';
   boundsQuantity : Duration ;
   boundsRange : Range ;
   boundsPeriod : Period ;
   count : string ;
   duration : string ;
   durationMax : string ;
   durationUnits : UnitsOfTimeEnum ;
   frequency : string ;
   frequencyMax : string ;
   period : string ;
   periodMax : string ;
   periodUnits : UnitsOfTimeEnum ;
   when : EventTimingEnum ;
}
