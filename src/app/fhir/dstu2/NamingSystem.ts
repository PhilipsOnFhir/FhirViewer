import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { NamingSystemTypeEnum } from './NamingSystemTypeEnum'
import { NamingSystem_Contact } from './NamingSystem_Contact'
import { NamingSystem_UniqueId } from './NamingSystem_UniqueId'
import { Reference } from './Reference'

export class NamingSystem      extends DomainResource
{

   static def : string = 'NamingSystem';
   name : string ;
   status : string ;
   kind : NamingSystemTypeEnum ;
   publisher : string ;
   contact : NamingSystem_Contact [];
   responsible : string ;
   date : string ;
   type : CodeableConcept ;
   description : string ;
   useContext : CodeableConcept [];
   usage : string ;
   uniqueId : NamingSystem_UniqueId [];
   replacedBy : Reference ;
}
