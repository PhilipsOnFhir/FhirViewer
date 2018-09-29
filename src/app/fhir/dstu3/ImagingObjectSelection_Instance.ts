import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ImagingObjectSelection_Frame } from './ImagingObjectSelection_Frame'

export class ImagingObjectSelection_Instance      extends BackboneElement
{

   static def : string = 'ImagingObjectSelection_Instance';
   sopClass : string ;
   uid : string ;
   url : string ;
   frame : ImagingObjectSelection_Frame [];
}
