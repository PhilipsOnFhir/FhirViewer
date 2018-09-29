import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Immunization_VaccinationProtocol      extends BackboneElement
{

   static def : string = 'Immunization_VaccinationProtocol';
   doseSequence : string ;
   description : string ;
   authority : Reference ;
   series : string ;
   seriesDoses : string ;
   targetDisease : CodeableConcept [];
   doseStatus : CodeableConcept ;
   doseStatusReason : CodeableConcept ;
}
