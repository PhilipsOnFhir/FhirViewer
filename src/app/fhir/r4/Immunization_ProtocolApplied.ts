import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Immunization_ProtocolApplied      extends BackboneElement
{

   static def : string = 'Immunization_ProtocolApplied';
   series : string ;
   authority : Reference ;
   targetDisease : CodeableConcept ;
   doseNumberPositiveInt : string ;
   doseNumberString : string ;
}
