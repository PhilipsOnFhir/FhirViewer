import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'
import { TestScript_Destination } from './TestScript_Destination'
import { TestScript_Fixture } from './TestScript_Fixture'
import { TestScript_Metadata } from './TestScript_Metadata'
import { TestScript_Origin } from './TestScript_Origin'
import { TestScript_Rule } from './TestScript_Rule'
import { TestScript_Ruleset } from './TestScript_Ruleset'
import { TestScript_Setup } from './TestScript_Setup'
import { TestScript_Teardown } from './TestScript_Teardown'
import { TestScript_Test } from './TestScript_Test'
import { TestScript_Variable } from './TestScript_Variable'
import { UsageContext } from './UsageContext'

export class TestScript      extends DomainResource
{

   static def : string = 'TestScript';
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
   origin : TestScript_Origin [];
   destination : TestScript_Destination [];
   metadata : TestScript_Metadata ;
   fixture : TestScript_Fixture [];
   profile : Reference [];
   variable : TestScript_Variable [];
   rule : TestScript_Rule [];
   ruleset : TestScript_Ruleset [];
   setup : TestScript_Setup ;
   test : TestScript_Test [];
   teardown : TestScript_Teardown ;
}
