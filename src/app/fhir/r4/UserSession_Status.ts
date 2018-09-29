import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { UserSessionStatusEnum } from './UserSessionStatusEnum'
import { UserSessionStatusSourceEnum } from './UserSessionStatusSourceEnum'

export class UserSession_Status      extends BackboneElement
{

   static def : string = 'UserSession_Status';
   code : UserSessionStatusEnum ;
   source : UserSessionStatusSourceEnum ;
}
