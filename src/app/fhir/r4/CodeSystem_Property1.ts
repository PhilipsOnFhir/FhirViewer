import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class CodeSystem_Property1      extends BackboneElement
{

   static def : string = 'CodeSystem_Property1';
   code : string ;
   valueCode : string ;
   valueCoding : Coding ;
   valueString : string ;
   valueInteger : string ;
   valueBoolean : string ;
   valueDateTime : string ;
   valueDecimal : string ;
}
