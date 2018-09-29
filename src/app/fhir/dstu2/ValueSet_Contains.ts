import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class ValueSet_Contains      extends BackboneElement
{

   static def : string = 'ValueSet_Contains';
   system : string ;
   abstract : string ;
   version : string ;
   code : string ;
   display : string ;
   contains : ValueSet_Contains [];
}
