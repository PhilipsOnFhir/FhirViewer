import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ImagingObjectSelection_Study } from './ImagingObjectSelection_Study'
import { Reference } from './Reference'

export class ImagingObjectSelection      extends DomainResource
{

   static def : string = 'ImagingObjectSelection';
   uid : string ;
   patient : Reference ;
   authoringTime : string ;
   author : Reference ;
   title : CodeableConcept ;
   description : string ;
   study : ImagingObjectSelection_Study [];
}
