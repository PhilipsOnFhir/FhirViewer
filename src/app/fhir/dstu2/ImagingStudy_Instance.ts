import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class ImagingStudy_Instance      extends BackboneElement
{

   static def : string = 'ImagingStudy_Instance';
   number : string ;
   uid : string ;
   sopClass : string ;
   type : string ;
   title : string ;
   content : Attachment [];
}
