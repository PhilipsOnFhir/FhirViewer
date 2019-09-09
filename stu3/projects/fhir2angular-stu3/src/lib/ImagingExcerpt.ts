import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ImagingExcerpt_Study } from './ImagingExcerpt_Study'
import { Reference } from './Reference'

export class ImagingExcerpt      extends DomainResource
{

   static def : string = 'ImagingExcerpt';
   uid : string ;
   patient : Reference ;
   authoringTime : string ;
   author : Reference ;
   title : CodeableConcept ;
   description : string ;
   study : ImagingExcerpt_Study [];
}
