import { CodeableConcept } from './CodeableConcept'
import { ConditionDefinition_Contact } from './ConditionDefinition_Contact'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class ConditionDefinition      extends DomainResource
{

   static def : string = 'ConditionDefinition';
   url : string ;
   identifier : Identifier [];
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : ConditionDefinition_Contact [];
   date : string ;
   useContext : CodeableConcept [];
   copyright : string ;
   severity : CodeableConcept ;
   occurance : CodeableConcept [];
   findingSite : Reference [];
   morphology : Reference [];
   causedBy : Reference [];
   associated : Reference [];
}
