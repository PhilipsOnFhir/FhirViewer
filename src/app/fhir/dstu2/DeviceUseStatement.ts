import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { Timing } from './Timing'

export class DeviceUseStatement      extends DomainResource
{

   static def : string = 'DeviceUseStatement';
   bodySiteCodeableConcept : CodeableConcept ;
   bodySiteReference : Reference ;
   whenUsed : Period ;
   device : Reference ;
   identifier : Identifier [];
   indication : CodeableConcept [];
   notes : string [];
   recordedOn : string ;
   subject : Reference ;
   timingTiming : Timing ;
   timingPeriod : Period ;
   timingDateTime : string ;
}
