import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestScript_Capability } from './TestScript_Capability'
import { TestScript_Link } from './TestScript_Link'

export class TestScript_Metadata      extends BackboneElement
{

   static def : string = 'TestScript_Metadata';
   link : TestScript_Link [];
   capability : TestScript_Capability [];
}
