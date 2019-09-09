import { BackboneElement } from './BackboneElement'
import { CapabilityStatement_Interaction } from './CapabilityStatement_Interaction'
import { CapabilityStatement_SearchParam } from './CapabilityStatement_SearchParam'
import { ConditionalDeleteStatusEnum } from './ConditionalDeleteStatusEnum'
import { ConditionalReadStatusEnum } from './ConditionalReadStatusEnum'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { ReferenceHandlingPolicyEnum } from './ReferenceHandlingPolicyEnum'
import { ResourceTypeEnum } from './ResourceTypeEnum'
import { ResourceVersionPolicyEnum } from './ResourceVersionPolicyEnum'

export class CapabilityStatement_Resource      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Resource';
   type : ResourceTypeEnum ;
   profile : Reference ;
   documentation : string ;
   interaction : CapabilityStatement_Interaction [];
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
   searchParam : CapabilityStatement_SearchParam [];
}
