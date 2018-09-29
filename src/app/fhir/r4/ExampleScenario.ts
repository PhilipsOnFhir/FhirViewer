import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { ExampleScenario_Actor } from './ExampleScenario_Actor'
import { ExampleScenario_Instance } from './ExampleScenario_Instance'
import { ExampleScenario_Process } from './ExampleScenario_Process'
import { Identifier } from './Identifier'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { UsageContext } from './UsageContext'

export class ExampleScenario      extends DomainResource
{

   static def : string = 'ExampleScenario';
   url : string ;
   identifier : Identifier [];
   version : string ;
   name : string ;
   status : PublicationStatusEnum ;
   experimental : string ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   copyright : string ;
   purpose : string ;
   actor : ExampleScenario_Actor [];
   instance : ExampleScenario_Instance [];
   process : ExampleScenario_Process [];
   workflow : string [];
}
