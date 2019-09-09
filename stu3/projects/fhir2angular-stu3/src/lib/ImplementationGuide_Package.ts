import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ImplementationGuide_Resource } from './ImplementationGuide_Resource'

export class ImplementationGuide_Package      extends BackboneElement
{

   static def : string = 'ImplementationGuide_Package';
   name : string ;
   description : string ;
   resource : ImplementationGuide_Resource [];
}
