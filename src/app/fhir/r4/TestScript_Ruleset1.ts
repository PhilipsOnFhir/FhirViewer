import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestScript_Rule3 } from './TestScript_Rule3'

export class TestScript_Ruleset1      extends BackboneElement
{

   static def : string = 'TestScript_Ruleset1';
   rulesetId : string ;
   rule : TestScript_Rule3 [];
}
