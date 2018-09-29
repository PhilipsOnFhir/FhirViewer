import { Annotation } from './Annotation'
import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { EventStatusEnum } from './EventStatusEnum'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Media      extends DomainResource
{

   static def : string = 'Media';
   identifier : Identifier [];
   basedOn : Reference [];
   partOf : Reference [];
   status : EventStatusEnum ;
   type : CodeableConcept ;
   modality : CodeableConcept ;
   view : CodeableConcept ;
   subject : Reference ;
   context : Reference ;
   createdDateTime : string ;
   createdPeriod : Period ;
   issued : string ;
   operator : Reference ;
   reasonCode : CodeableConcept [];
   bodySite : CodeableConcept ;
   deviceName : string ;
   device : Reference ;
   height : string ;
   width : string ;
   frames : string ;
   duration : string ;
   content : Attachment ;
   note : Annotation [];
}
