import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestScript_Param1 } from './TestScript_Param1'

export class TestScript_Rule1      extends BackboneElement
{

   static def : string = 'TestScript_Rule1';
   ruleId : string ;
   param : TestScript_Param1 [];
}
