import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { ExtensionContextEnum } from './ExtensionContextEnum'
import { Identifier } from './Identifier'
import { StructureDefinitionKindEnum } from './StructureDefinitionKindEnum'
import { StructureDefinition_Contact } from './StructureDefinition_Contact'
import { StructureDefinition_Differential } from './StructureDefinition_Differential'
import { StructureDefinition_Mapping } from './StructureDefinition_Mapping'
import { StructureDefinition_Snapshot } from './StructureDefinition_Snapshot'

export class StructureDefinition      extends DomainResource
{

   static def : string = 'StructureDefinition';
   url : string ;
   identifier : Identifier [];
   version : string ;
   name : string ;
   display : string ;
   status : string ;
   experimental : string ;
   publisher : string ;
   contact : StructureDefinition_Contact [];
   date : string ;
   description : string ;
   useContext : CodeableConcept [];
   requirements : string ;
   copyright : string ;
   code : Coding [];
   fhirVersion : string ;
   mapping : StructureDefinition_Mapping [];
   kind : StructureDefinitionKindEnum ;
   constrainedType : string ;
   abstract : string ;
   contextType : ExtensionContextEnum ;
   context : string [];
   base : string ;
   snapshot : StructureDefinition_Snapshot ;
   differential : StructureDefinition_Differential ;
}
