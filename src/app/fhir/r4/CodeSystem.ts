import { CodeSystemContentModeEnum } from './CodeSystemContentModeEnum'
import { CodeSystemHierarchyMeaningEnum } from './CodeSystemHierarchyMeaningEnum'
import { CodeSystem_Concept } from './CodeSystem_Concept'
import { CodeSystem_Filter } from './CodeSystem_Filter'
import { CodeSystem_Property } from './CodeSystem_Property'
import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { UsageContext } from './UsageContext'

export class CodeSystem      extends DomainResource
{

   static def : string = 'CodeSystem';
   url : string ;
   identifier : Identifier ;
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
   caseSensitive : string ;
   valueSet : string ;
   hierarchyMeaning : CodeSystemHierarchyMeaningEnum ;
   compositional : string ;
   versionNeeded : string ;
   content : CodeSystemContentModeEnum ;
   supplements : string ;
   count : string ;
   filter : CodeSystem_Filter [];
   property : CodeSystem_Property [];
   concept : CodeSystem_Concept [];
}
