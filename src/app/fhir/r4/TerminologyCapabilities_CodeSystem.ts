import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TerminologyCapabilities_Version } from './TerminologyCapabilities_Version'

export class TerminologyCapabilities_CodeSystem      extends BackboneElement
{

   static def : string = 'TerminologyCapabilities_CodeSystem';
   uri : string ;
   version : TerminologyCapabilities_Version [];
}
