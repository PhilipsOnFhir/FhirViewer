import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { DigitalMediaTypeEnum } from './DigitalMediaTypeEnum'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Media      extends DomainResource
{

   static def : string = 'Media';
   type : DigitalMediaTypeEnum ;
   subtype : CodeableConcept ;
   identifier : Identifier [];
   subject : Reference ;
   operator : Reference ;
   view : CodeableConcept ;
   deviceName : string ;
   height : string ;
   width : string ;
   frames : string ;
   duration : string ;
   content : Attachment ;
}
