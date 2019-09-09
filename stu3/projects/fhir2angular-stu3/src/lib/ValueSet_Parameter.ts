import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class ValueSet_Parameter      extends BackboneElement
{

   static def : string = 'ValueSet_Parameter';
   name : string ;
   valueString : string ;
   valueBoolean : boolean ;
   valueInteger : string ;
   valueDecimal : string ;
   valueUri : string ;
   valueCode : string ;
}
