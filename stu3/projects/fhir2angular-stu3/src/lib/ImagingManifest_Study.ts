import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ImagingManifest_Series } from './ImagingManifest_Series'
import { Reference } from './Reference'

export class ImagingManifest_Study      extends BackboneElement
{

   static def : string = 'ImagingManifest_Study';
   uid : string ;
   imagingStudy : Reference ;
   endpoint : Reference [];
   series : ImagingManifest_Series [];
}
