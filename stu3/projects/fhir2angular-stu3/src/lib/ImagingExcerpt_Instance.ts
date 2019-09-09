import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ImagingExcerpt_Dicom2 } from './ImagingExcerpt_Dicom2'

export class ImagingExcerpt_Instance      extends BackboneElement
{

   static def : string = 'ImagingExcerpt_Instance';
   sopClass : string ;
   uid : string ;
   dicom : ImagingExcerpt_Dicom2 [];
   frameNumbers : string [];
}
