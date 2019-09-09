import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ImagingExcerpt_Dicom1 } from './ImagingExcerpt_Dicom1'
import { ImagingExcerpt_Instance } from './ImagingExcerpt_Instance'

export class ImagingExcerpt_Series      extends BackboneElement
{

   static def : string = 'ImagingExcerpt_Series';
   uid : string ;
   dicom : ImagingExcerpt_Dicom1 [];
   instance : ImagingExcerpt_Instance [];
}
