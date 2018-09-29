import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DeviceUseStatementStatusEnum } from './DeviceUseStatementStatusEnum'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { Timing } from './Timing'

export class DeviceUseStatement      extends DomainResource
{

   static def : string = 'DeviceUseStatement';
   identifier : Identifier [];
   basedOn : Reference [];
   status : DeviceUseStatementStatusEnum ;
   subject : Reference ;
   derivedFrom : Reference [];
   timingTiming : Timing ;
   timingPeriod : Period ;
   timingDateTime : string ;
   recordedOn : string ;
   source : Reference ;
   device : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   bodySite : CodeableConcept ;
   note : Annotation [];
}
