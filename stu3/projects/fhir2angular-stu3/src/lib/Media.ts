import { Annotation } from './Annotation'
import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { DigitalMediaTypeEnum } from './DigitalMediaTypeEnum'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Media      extends DomainResource
{

   static def : string = 'Media';
   identifier : Identifier [];
   basedOn : Reference [];
   type : DigitalMediaTypeEnum ;
   subtype : CodeableConcept ;
   view : CodeableConcept ;
   subject : Reference ;
   context : Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   operator : Reference ;
   reasonCode : CodeableConcept [];
   bodySite : CodeableConcept ;
   device : Reference ;
   height : string ;
   width : string ;
   frames : string ;
   duration : string ;
   content : Attachment ;
   note : Annotation [];
}
