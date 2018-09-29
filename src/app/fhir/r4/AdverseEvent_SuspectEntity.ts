import { AdverseEvent_Causality } from './AdverseEvent_Causality'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class AdverseEvent_SuspectEntity      extends BackboneElement
{

   static def : string = 'AdverseEvent_SuspectEntity';
   instance : Reference ;
   causality : AdverseEvent_Causality [];
}
