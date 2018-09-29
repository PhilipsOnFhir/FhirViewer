import { BackboneElement } from './BackboneElement'
import { CapabilityStatement_Interaction1 } from './CapabilityStatement_Interaction1'
import { CapabilityStatement_Operation } from './CapabilityStatement_Operation'
import { CapabilityStatement_Resource } from './CapabilityStatement_Resource'
import { CapabilityStatement_SearchParam } from './CapabilityStatement_SearchParam'
import { CapabilityStatement_Security } from './CapabilityStatement_Security'
import { DomainResource } from './DomainResource'
import { RestfulCapabilityModeEnum } from './RestfulCapabilityModeEnum'

export class CapabilityStatement_Rest      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Rest';
   mode : RestfulCapabilityModeEnum ;
   documentation : string ;
   security : CapabilityStatement_Security ;
   resource : CapabilityStatement_Resource [];
   interaction : CapabilityStatement_Interaction1 [];
   searchParam : CapabilityStatement_SearchParam [];
   operation : CapabilityStatement_Operation [];
   compartment : string [];
}
