import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { GuideDependencyTypeEnum } from './GuideDependencyTypeEnum'

export class ImplementationGuide_Dependency      extends BackboneElement
{

   static def : string = 'ImplementationGuide_Dependency';
   type : GuideDependencyTypeEnum ;
   uri : string ;
}
