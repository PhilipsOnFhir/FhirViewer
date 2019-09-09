import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ValueSet_Designation } from './ValueSet_Designation'

export class ValueSet_Contains      extends BackboneElement
{

   static def : string = 'ValueSet_Contains';
   system : string ;
   abstract : boolean ;
   inactive : boolean ;
   version : string ;
   code : string ;
   display : string ;
   designation : ValueSet_Designation [];
   contains : ValueSet_Contains [];
}
