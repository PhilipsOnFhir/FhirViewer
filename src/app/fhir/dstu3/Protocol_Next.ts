import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Protocol_Precondition } from './Protocol_Precondition'

export class Protocol_Next      extends BackboneElement
{

   static def : string = 'Protocol_Next';
   description : string ;
   reference : string ;
   condition : Protocol_Precondition ;
}
