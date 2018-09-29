import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { GraphDefinition_Link } from './GraphDefinition_Link'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { ResourceTypeEnum } from './ResourceTypeEnum'
import { UsageContext } from './UsageContext'

export class GraphDefinition      extends DomainResource
{

   static def : string = 'GraphDefinition';
   url : string ;
   version : string ;
   name : string ;
   status : PublicationStatusEnum ;
   experimental : string ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   purpose : string ;
   start : ResourceTypeEnum ;
   profile : string ;
   link : GraphDefinition_Link [];
}
