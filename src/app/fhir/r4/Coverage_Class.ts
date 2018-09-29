import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class Coverage_Class      extends BackboneElement
{

   static def : string = 'Coverage_Class';
   type : Coding ;
   value : string ;
   name : string ;
}
