import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TerminologyCapabilities_Filter } from './TerminologyCapabilities_Filter'

export class TerminologyCapabilities_Version      extends BackboneElement
{

   static def : string = 'TerminologyCapabilities_Version';
   code : string ;
   isDefault : string ;
   compositional : string ;
   language : string [];
   filter : TerminologyCapabilities_Filter [];
   property : string [];
}
