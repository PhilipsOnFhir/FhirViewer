import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { NamingSystemTypeEnum } from './NamingSystemTypeEnum'
import { NamingSystem_UniqueId } from './NamingSystem_UniqueId'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { UsageContext } from './UsageContext'

export class NamingSystem      extends DomainResource
{

   static def : string = 'NamingSystem';
   name : string ;
   status : PublicationStatusEnum ;
   kind : NamingSystemTypeEnum ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   responsible : string ;
   type : CodeableConcept ;
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   usage : string ;
   uniqueId : NamingSystem_UniqueId [];
}
