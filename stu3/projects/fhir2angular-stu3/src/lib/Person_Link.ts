import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { IdentityAssuranceLevelEnum } from './IdentityAssuranceLevelEnum'
import { Reference } from './Reference'

export class Person_Link      extends BackboneElement
{

   static def : string = 'Person_Link';
   target : Reference ;
   assurance : IdentityAssuranceLevelEnum ;
}
