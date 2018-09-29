import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class TerminologyCapabilities_Expansion      extends BackboneElement
{

   static def : string = 'TerminologyCapabilities_Expansion';
   hierarchical : string ;
   paging : string ;
   incomplete : string ;
   definition : string ;
   profile : string [];
   textFilter : string ;
}
