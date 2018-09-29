import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ImmunizationStatusCodesEnum } from './ImmunizationStatusCodesEnum'
import { Immunization_Explanation } from './Immunization_Explanation'
import { Immunization_Practitioner } from './Immunization_Practitioner'
import { Immunization_Reaction } from './Immunization_Reaction'
import { Immunization_VaccinationProtocol } from './Immunization_VaccinationProtocol'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class Immunization      extends DomainResource
{

   static def : string = 'Immunization';
   identifier : Identifier [];
   status : ImmunizationStatusCodesEnum ;
   notGiven : string ;
   vaccineCode : CodeableConcept ;
   patient : Reference ;
   encounter : Reference ;
   date : string ;
   primarySource : string ;
   reportOrigin : CodeableConcept ;
   location : Reference ;
   manufacturer : Reference ;
   lotNumber : string ;
   expirationDate : string ;
   site : CodeableConcept ;
   route : CodeableConcept ;
   doseQuantity : Quantity ;
   practitioner : Immunization_Practitioner [];
   note : Annotation [];
   explanation : Immunization_Explanation ;
   reaction : Immunization_Reaction [];
   vaccinationProtocol : Immunization_VaccinationProtocol [];
}
