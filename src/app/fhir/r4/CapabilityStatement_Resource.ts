import { BackboneElement } from './BackboneElement'
import { CapabilityStatement_Interaction } from './CapabilityStatement_Interaction'
import { CapabilityStatement_Operation } from './CapabilityStatement_Operation'
import { CapabilityStatement_SearchParam } from './CapabilityStatement_SearchParam'
import { ConditionalDeleteStatusEnum } from './ConditionalDeleteStatusEnum'
import { ConditionalReadStatusEnum } from './ConditionalReadStatusEnum'
import { DomainResource } from './DomainResource'
import { ReferenceHandlingPolicyEnum } from './ReferenceHandlingPolicyEnum'
import { ResourceTypeEnum } from './ResourceTypeEnum'
import { ResourceVersionPolicyEnum } from './ResourceVersionPolicyEnum'

export class CapabilityStatement_Resource      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Resource';
   type : ResourceTypeEnum ;
   profile : string ;
   supportedProfile : string [];
   documentation : string ;
   interaction : CapabilityStatement_Interaction [];
   versioning : ResourceVersionPolicyEnum ;
   readHistory : string ;
   updateCreate : string ;
   conditionalCreate : string ;
   conditionalRead : ConditionalReadStatusEnum ;
   conditionalUpdate : string ;
   conditionalDelete : ConditionalDeleteStatusEnum ;
   referencePolicy : ReferenceHandlingPolicyEnum [];
   searchInclude : string [];
   searchRevInclude : string [];
   searchParam : CapabilityStatement_SearchParam [];
   operation : CapabilityStatement_Operation [];
}
