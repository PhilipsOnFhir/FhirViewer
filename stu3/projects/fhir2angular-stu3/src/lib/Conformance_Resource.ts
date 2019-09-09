import { BackboneElement } from './BackboneElement'
import { ConditionalDeleteStatusEnum } from './ConditionalDeleteStatusEnum'
import { ConditionalReadStatusEnum } from './ConditionalReadStatusEnum'
import { Conformance_Interaction } from './Conformance_Interaction'
import { Conformance_SearchParam } from './Conformance_SearchParam'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { ReferenceHandlingPolicyEnum } from './ReferenceHandlingPolicyEnum'
import { ResourceVersionPolicyEnum } from './ResourceVersionPolicyEnum'

export class Conformance_Resource      extends BackboneElement
{

   static def : string = 'Conformance_Resource';
   type : string ;
   profile : Reference ;
   documentation : string ;
   interaction : Conformance_Interaction [];
   versioning : ResourceVersionPolicyEnum ;
   readHistory : boolean ;
   updateCreate : boolean ;
   conditionalCreate : boolean ;
   conditionalRead : ConditionalReadStatusEnum ;
   conditionalUpdate : boolean ;
   conditionalDelete : ConditionalDeleteStatusEnum ;
   referencePolicy : ReferenceHandlingPolicyEnum [];
   searchInclude : string [];
   searchRevInclude : string [];
   searchParam : Conformance_SearchParam [];
}
