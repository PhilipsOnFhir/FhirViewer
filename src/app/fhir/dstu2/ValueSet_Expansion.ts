import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ValueSet_Contains } from './ValueSet_Contains'
import { ValueSet_Parameter } from './ValueSet_Parameter'

export class ValueSet_Expansion      extends BackboneElement
{

   static def : string = 'ValueSet_Expansion';
   identifier : string ;
   timestamp : string ;
   total : string ;
   offset : string ;
   parameter : ValueSet_Parameter [];
   contains : ValueSet_Contains [];
}
