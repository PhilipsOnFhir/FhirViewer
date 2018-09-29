import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class MedicinalProduct_NamePart      extends BackboneElement
{

   static def : string = 'MedicinalProduct_NamePart';
   part : string ;
   type : Coding ;
}
