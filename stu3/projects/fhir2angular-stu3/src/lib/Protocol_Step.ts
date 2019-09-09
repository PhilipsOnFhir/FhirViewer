import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Protocol_Activity } from './Protocol_Activity'
import { Protocol_Next } from './Protocol_Next'
import { Protocol_Precondition } from './Protocol_Precondition'

export class Protocol_Step      extends BackboneElement
{

   static def : string = 'Protocol_Step';
   name : string ;
   description : string ;
   duration : string ;
   precondition : Protocol_Precondition ;
   exit : Protocol_Precondition ;
   firstActivity : string ;
   activity : Protocol_Activity [];
   next : Protocol_Next [];
}
