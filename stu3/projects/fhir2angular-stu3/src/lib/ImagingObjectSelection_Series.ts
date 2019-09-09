import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ImagingObjectSelection_Instance } from './ImagingObjectSelection_Instance'

export class ImagingObjectSelection_Series      extends BackboneElement
{

   static def : string = 'ImagingObjectSelection_Series';
   uid : string ;
   url : string ;
   instance : ImagingObjectSelection_Instance [];
}
