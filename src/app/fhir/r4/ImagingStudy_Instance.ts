import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class ImagingStudy_Instance      extends BackboneElement
{

   static def : string = 'ImagingStudy_Instance';
   identifier : Identifier ;
   number : string ;
   sopClass : Coding ;
   title : string ;
}
