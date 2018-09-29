import { CodeableConcept } from './CodeableConcept'
import { ConceptMap_Group } from './ConceptMap_Group'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { UsageContext } from './UsageContext'

export class ConceptMap      extends DomainResource
{

   static def : string = 'ConceptMap';
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
   sourceUri : string ;
   sourceCanonical : string ;
   targetUri : string ;
   targetCanonical : string ;
   group : ConceptMap_Group [];
}
