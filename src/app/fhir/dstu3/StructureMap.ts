import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { StructureMap_Group } from './StructureMap_Group'
import { StructureMap_Structure } from './StructureMap_Structure'
import { UsageContext } from './UsageContext'

export class StructureMap      extends DomainResource
{

   static def : string = 'StructureMap';
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
   purpose : string ;
   copyright : string ;
   structure : StructureMap_Structure [];
   import : string [];
   group : StructureMap_Group [];
}
