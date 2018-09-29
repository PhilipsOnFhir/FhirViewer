import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { GuideParameterCodeEnum } from './GuideParameterCodeEnum'

export class ImplementationGuide_Parameter      extends BackboneElement
{

   static def : string = 'ImplementationGuide_Parameter';
   code : GuideParameterCodeEnum ;
   value : string ;
}
