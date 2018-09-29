import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ImagingExcerpt_Dicom } from './ImagingExcerpt_Dicom'
import { ImagingExcerpt_Series } from './ImagingExcerpt_Series'
import { ImagingExcerpt_Viewable } from './ImagingExcerpt_Viewable'
import { Reference } from './Reference'

export class ImagingExcerpt_Study      extends BackboneElement
{

   static def : string = 'ImagingExcerpt_Study';
   uid : string ;
   imagingStudy : Reference ;
   dicom : ImagingExcerpt_Dicom [];
   viewable : ImagingExcerpt_Viewable [];
   series : ImagingExcerpt_Series [];
}
