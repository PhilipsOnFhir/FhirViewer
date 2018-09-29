import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { TestScript_Contact } from './TestScript_Contact'
import { TestScript_Fixture } from './TestScript_Fixture'
import { TestScript_Metadata } from './TestScript_Metadata'
import { TestScript_Setup } from './TestScript_Setup'
import { TestScript_Teardown } from './TestScript_Teardown'
import { TestScript_Test } from './TestScript_Test'
import { TestScript_Variable } from './TestScript_Variable'

export class TestScript      extends DomainResource
{

   static def : string = 'TestScript';
   url : string ;
   version : string ;
   name : string ;
   status : string ;
   identifier : Identifier ;
   experimental : string ;
   publisher : string ;
   contact : TestScript_Contact [];
   date : string ;
   description : string ;
   useContext : CodeableConcept [];
   requirements : string ;
   copyright : string ;
   metadata : TestScript_Metadata ;
   multiserver : string ;
   fixture : TestScript_Fixture [];
   profile : Reference [];
   variable : TestScript_Variable [];
   setup : TestScript_Setup ;
   test : TestScript_Test [];
   teardown : TestScript_Teardown ;
}
