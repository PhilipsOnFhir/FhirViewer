import { BackboneElement } from './BackboneElement'
import { ConditionalDeleteStatusEnum } from './ConditionalDeleteStatusEnum'
import { Conformance_Interaction } from './Conformance_Interaction'
import { Conformance_SearchParam } from './Conformance_SearchParam'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { ResourceVersionPolicyEnum } from './ResourceVersionPolicyEnum'

export class Conformance_Resource      extends BackboneElement
{

   static def : string = 'Conformance_Resource';
   type : string ;
   profile : Reference ;
   interaction : Conformance_Interaction [];
   versioning : ResourceVersionPolicyEnum ;
   readHistory : string ;
   updateCreate : string ;
   conditionalCreate : string ;
   conditionalUpdate : string ;
   conditionalDelete : ConditionalDeleteStatusEnum ;
   searchInclude : string [];
   searchRevInclude : string [];
   searchParam : Conformance_SearchParam [];
}
