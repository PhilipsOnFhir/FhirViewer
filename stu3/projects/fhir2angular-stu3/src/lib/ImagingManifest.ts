import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ImagingManifest_Study } from './ImagingManifest_Study'
import { Reference } from './Reference'

export class ImagingManifest      extends DomainResource
{

   static def : string = 'ImagingManifest';
   identifier : Identifier ;
   patient : Reference ;
   authoringTime : string ;
   author : Reference ;
   description : string ;
   study : ImagingManifest_Study [];
}
