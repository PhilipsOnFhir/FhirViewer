import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class ImplementationGuide_DependsOn      extends BackboneElement
{

   static def : string = 'ImplementationGuide_DependsOn';
   uri : string ;
   packageId : string ;
   version : string ;
}
