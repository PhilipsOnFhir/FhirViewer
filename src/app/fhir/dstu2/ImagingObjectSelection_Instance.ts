import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ImagingObjectSelection_Frames } from './ImagingObjectSelection_Frames'

export class ImagingObjectSelection_Instance      extends BackboneElement
{

   static def : string = 'ImagingObjectSelection_Instance';
   sopClass : string ;
   uid : string ;
   url : string ;
   frames : ImagingObjectSelection_Frames [];
}
