import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestScript_Param3 } from './TestScript_Param3'

export class TestScript_Rule3      extends BackboneElement
{

   static def : string = 'TestScript_Rule3';
   ruleId : string ;
   param : TestScript_Param3 [];
}
