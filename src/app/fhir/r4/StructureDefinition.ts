import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { StructureDefinitionKindEnum } from './StructureDefinitionKindEnum'
import { StructureDefinition_Context } from './StructureDefinition_Context'
import { StructureDefinition_Differential } from './StructureDefinition_Differential'
import { StructureDefinition_Mapping } from './StructureDefinition_Mapping'
import { StructureDefinition_Snapshot } from './StructureDefinition_Snapshot'
import { TypeDerivationRuleEnum } from './TypeDerivationRuleEnum'
import { UsageContext } from './UsageContext'

export class StructureDefinition      extends DomainResource
{

   static def : string = 'StructureDefinition';
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
   keyword : Coding [];
   fhirVersion : string ;
   mapping : StructureDefinition_Mapping [];
   kind : StructureDefinitionKindEnum ;
   abstract : string ;
   context : StructureDefinition_Context [];
   contextInvariant : string [];
   type : string ;
   baseDefinition : string ;
   derivation : TypeDerivationRuleEnum ;
   snapshot : StructureDefinition_Snapshot ;
   differential : StructureDefinition_Differential ;
}
