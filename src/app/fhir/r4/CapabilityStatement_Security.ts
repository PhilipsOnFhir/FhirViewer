import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class CapabilityStatement_Security      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Security';
   cors : string ;
   service : CodeableConcept [];
   description : string ;
}
