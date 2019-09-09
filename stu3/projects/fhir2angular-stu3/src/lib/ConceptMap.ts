import { CodeableConcept } from './CodeableConcept'
import { ConceptMap_Group } from './ConceptMap_Group'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'
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
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   purpose : string ;
   copyright : string ;
   sourceUri : string ;
   sourceReference : Reference ;
   targetUri : string ;
   targetReference : Reference ;
   group : ConceptMap_Group [];
}
