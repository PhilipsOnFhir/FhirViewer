import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Protocol_Condition } from './Protocol_Condition'

export class Protocol_Precondition      extends BackboneElement
{

   static def : string = 'Protocol_Precondition';
   description : string ;
   condition : Protocol_Condition ;
   intersection : Protocol_Precondition [];
   union : Protocol_Precondition [];
   exclude : Protocol_Precondition [];
}
