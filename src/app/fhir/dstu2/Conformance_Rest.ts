import { BackboneElement } from './BackboneElement'
import { Conformance_Interaction1 } from './Conformance_Interaction1'
import { Conformance_Operation } from './Conformance_Operation'
import { Conformance_Resource } from './Conformance_Resource'
import { Conformance_SearchParam } from './Conformance_SearchParam'
import { Conformance_Security } from './Conformance_Security'
import { DomainResource } from './DomainResource'
import { RestfulConformanceModeEnum } from './RestfulConformanceModeEnum'
import { TransactionModeEnum } from './TransactionModeEnum'

export class Conformance_Rest      extends BackboneElement
{

   static def : string = 'Conformance_Rest';
   mode : RestfulConformanceModeEnum ;
   documentation : string ;
   security : Conformance_Security ;
   resource : Conformance_Resource [];
   interaction : Conformance_Interaction1 [];
   transactionMode : TransactionModeEnum ;
   searchParam : Conformance_SearchParam [];
   operation : Conformance_Operation [];
   compartment : string [];
}
