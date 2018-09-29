import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ImagingObjectSelection_Series } from './ImagingObjectSelection_Series'
import { Reference } from './Reference'

export class ImagingObjectSelection_Study      extends BackboneElement
{

   static def : string = 'ImagingObjectSelection_Study';
   uid : string ;
   url : string ;
   imagingStudy : Reference ;
   series : ImagingObjectSelection_Series [];
}
