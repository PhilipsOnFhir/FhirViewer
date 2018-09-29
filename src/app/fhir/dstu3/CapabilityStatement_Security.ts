import { BackboneElement } from './BackboneElement'
import { CapabilityStatement_Certificate } from './CapabilityStatement_Certificate'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class CapabilityStatement_Security      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Security';
   cors : string ;
   service : CodeableConcept [];
   description : string ;
   certificate : CapabilityStatement_Certificate [];
}
