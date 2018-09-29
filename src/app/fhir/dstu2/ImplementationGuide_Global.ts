import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ImplementationGuide_Global      extends BackboneElement
{

   static def : string = 'ImplementationGuide_Global';
   type : string ;
   profile : Reference ;
}
