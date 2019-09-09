import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ValueSet_Include } from './ValueSet_Include'

export class ValueSet_Compose      extends BackboneElement
{

   static def : string = 'ValueSet_Compose';
   lockedDate : string ;
   inactive : boolean ;
   include : ValueSet_Include [];
   exclude : ValueSet_Include [];
}
