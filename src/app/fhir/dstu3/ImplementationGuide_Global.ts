import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { ResourceTypeEnum } from './ResourceTypeEnum'

export class ImplementationGuide_Global      extends BackboneElement
{

   static def : string = 'ImplementationGuide_Global';
   type : ResourceTypeEnum ;
   profile : Reference ;
}
