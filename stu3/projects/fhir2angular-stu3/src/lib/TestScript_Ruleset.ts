import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { TestScript_Rule1 } from './TestScript_Rule1'

export class TestScript_Ruleset      extends BackboneElement
{

   static def : string = 'TestScript_Ruleset';
   resource : Reference ;
   rule : TestScript_Rule1 [];
}
