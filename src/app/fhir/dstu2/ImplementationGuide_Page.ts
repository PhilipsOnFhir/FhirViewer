import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { GuidePageKindEnum } from './GuidePageKindEnum'

export class ImplementationGuide_Page      extends BackboneElement
{

   static def : string = 'ImplementationGuide_Page';
   source : string ;
   name : string ;
   kind : GuidePageKindEnum ;
   type : string [];
   package : string [];
   format : string ;
   page : ImplementationGuide_Page [];
}
