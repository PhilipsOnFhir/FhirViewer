import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { NamingSystemIdentifierTypeEnum } from './NamingSystemIdentifierTypeEnum'
import { Period } from './Period'

export class NamingSystem_UniqueId      extends BackboneElement
{

   static def : string = 'NamingSystem_UniqueId';
   type : NamingSystemIdentifierTypeEnum ;
   value : string ;
   preferred : string ;
   comment : string ;
   period : Period ;
}
