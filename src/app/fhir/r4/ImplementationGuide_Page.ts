import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { GuidePageGenerationEnum } from './GuidePageGenerationEnum'
import { Reference } from './Reference'

export class ImplementationGuide_Page      extends BackboneElement
{

   static def : string = 'ImplementationGuide_Page';
   nameUrl : string ;
   nameReference : Reference ;
   title : string ;
   generation : GuidePageGenerationEnum ;
   page : ImplementationGuide_Page [];
}
