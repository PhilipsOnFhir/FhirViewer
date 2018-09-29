import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Conformance_Certificate } from './Conformance_Certificate'
import { DomainResource } from './DomainResource'

export class Conformance_Security      extends BackboneElement
{

   static def : string = 'Conformance_Security';
   cors : string ;
   service : CodeableConcept [];
   description : string ;
   certificate : Conformance_Certificate [];
}
