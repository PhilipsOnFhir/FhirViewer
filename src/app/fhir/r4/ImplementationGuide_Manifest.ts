import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ImplementationGuide_Page1 } from './ImplementationGuide_Page1'
import { ImplementationGuide_Resource1 } from './ImplementationGuide_Resource1'

export class ImplementationGuide_Manifest      extends BackboneElement
{

   static def : string = 'ImplementationGuide_Manifest';
   rendering : string ;
   resource : ImplementationGuide_Resource1 [];
   page : ImplementationGuide_Page1 [];
   image : string [];
   other : string [];
}
