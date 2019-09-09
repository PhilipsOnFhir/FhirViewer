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
   status : DeviceUseStatementStatusEnum ;
   subject : Reference ;
   whenUsed : Period ;
   timingTiming : Timing ;
   timingPeriod : Period ;
   timingDateTime : string ;
   recordedOn : string ;
   source : Reference ;
   device : Reference ;
   indication : CodeableConcept [];
   bodySite : CodeableConcept ;
   note : Annotation [];
}
