import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { UserSession_Context } from './UserSession_Context'
import { UserSession_Status } from './UserSession_Status'

export class UserSession      extends DomainResource
{

   static def : string = 'UserSession';
   identifier : Identifier ;
   user : Reference ;
   status : UserSession_Status ;
   workstation : Identifier ;
   focus : Reference [];
   created : string ;
   expires : string ;
   context : UserSession_Context [];
}
