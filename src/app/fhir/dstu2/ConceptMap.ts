import { CodeableConcept } from './CodeableConcept'
import { ConceptMap_Contact } from './ConceptMap_Contact'
import { ConceptMap_Element } from './ConceptMap_Element'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class ConceptMap      extends DomainResource
{

   static def : string = 'ConceptMap';
   url : string ;
   identifier : Identifier ;
   version : string ;
   name : string ;
   status : string ;
   experimental : string ;
   publisher : string ;
   contact : ConceptMap_Contact [];
   date : string ;
   description : string ;
   useContext : CodeableConcept [];
   requirements : string ;
   copyright : string ;
   sourceUri : string ;
   sourceReference : Reference ;
   targetUri : string ;
   targetReference : Reference ;
   element : ConceptMap_Element [];
}
