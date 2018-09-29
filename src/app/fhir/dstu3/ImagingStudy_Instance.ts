import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class ImagingStudy_Instance      extends BackboneElement
{

   static def : string = 'ImagingStudy_Instance';
   uid : string ;
   number : string ;
   sopClass : string ;
   title : string ;
}
