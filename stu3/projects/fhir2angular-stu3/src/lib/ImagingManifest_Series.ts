import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ImagingManifest_Instance } from './ImagingManifest_Instance'
import { Reference } from './Reference'

export class ImagingManifest_Series      extends BackboneElement
{

   static def : string = 'ImagingManifest_Series';
   uid : string ;
   endpoint : Reference [];
   instance : ImagingManifest_Instance [];
}
