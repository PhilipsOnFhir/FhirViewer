import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { GuidePageKindEnum } from './GuidePageKindEnum'
import { ResourceTypeEnum } from './ResourceTypeEnum'

export class ImplementationGuide_Page      extends BackboneElement
{

   static def : string = 'ImplementationGuide_Page';
   source : string ;
   title : string ;
   kind : GuidePageKindEnum ;
   type : ResourceTypeEnum [];
   package : string [];
   format : string ;
   page : ImplementationGuide_Page [];
}
