import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestScript_Param2 } from './TestScript_Param2'

export class TestScript_Rule2      extends BackboneElement
{

   static def : string = 'TestScript_Rule2';
   ruleId : string ;
   param : TestScript_Param2 [];
}
