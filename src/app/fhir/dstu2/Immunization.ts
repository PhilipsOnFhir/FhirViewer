import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Immunization_Explanation } from './Immunization_Explanation'
import { Immunization_Reaction } from './Immunization_Reaction'
import { Immunization_VaccinationProtocol } from './Immunization_VaccinationProtocol'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'

export class Immunization      extends DomainResource
{

   static def : string = 'Immunization';
   identifier : Identifier [];
   status : string ;
   date : string ;
   vaccineCode : CodeableConcept ;
   patient : Reference ;
   wasNotGiven : string ;
   reported : string ;
   performer : Reference ;
   requester : Reference ;
   encounter : Reference ;
   manufacturer : Reference ;
   location : Reference ;
   lotNumber : string ;
   expirationDate : string ;
   site : CodeableConcept ;
   route : CodeableConcept ;
   doseQuantity : SimpleQuantity ;
   note : Annotation [];
   explanation : Immunization_Explanation ;
   reaction : Immunization_Reaction [];
   vaccinationProtocol : Immunization_VaccinationProtocol [];
}
