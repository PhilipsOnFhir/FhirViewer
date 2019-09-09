import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ProtocolStatusEnum } from './ProtocolStatusEnum'
import { ProtocolTypeEnum } from './ProtocolTypeEnum'
import { Protocol_Step } from './Protocol_Step'
import { Reference } from './Reference'

export class Protocol      extends DomainResource
{

   static def : string = 'Protocol';
   identifier : Identifier [];
   title : string ;
   status : ProtocolStatusEnum ;
   type : ProtocolTypeEnum ;
   subject : Reference ;
   group : Reference ;
   purpose : string ;
   author : Reference ;
   step : Protocol_Step [];
}
