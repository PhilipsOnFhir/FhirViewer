import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Protocol_Component } from './Protocol_Component'
import { Protocol_Detail } from './Protocol_Detail'

export class Protocol_Activity      extends BackboneElement
{

   static def : string = 'Protocol_Activity';
   alternative : string [];
   component : Protocol_Component [];
   following : string [];
   wait : string ;
   detail : Protocol_Detail ;
}
