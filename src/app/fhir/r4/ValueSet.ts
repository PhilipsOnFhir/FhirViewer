import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { UsageContext } from './UsageContext'
import { ValueSet_Compose } from './ValueSet_Compose'
import { ValueSet_Expansion } from './ValueSet_Expansion'

export class ValueSet      extends DomainResource
{

   static def : string = 'ValueSet';
   url : string ;
   identifier : Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : PublicationStatusEnum ;
   experimental : string ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   immutable : string ;
   purpose : string ;
   copyright : string ;
   extensible : string ;
   compose : ValueSet_Compose ;
   expansion : ValueSet_Expansion ;
}
