import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { HealthcareService_AvailableTime } from './HealthcareService_AvailableTime'
import { HealthcareService_NotAvailable } from './HealthcareService_NotAvailable'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class HealthcareService      extends DomainResource
{

   static def : string = 'HealthcareService';
   identifier : Identifier [];
   active : string ;
   providedBy : Reference ;
   category : CodeableConcept [];
   type : CodeableConcept [];
   specialty : CodeableConcept [];
   location : Reference [];
   name : string ;
   comment : string ;
   extraDetails : string ;
   photo : Attachment ;
   telecom : ContactPoint [];
   coverageArea : Reference [];
   serviceProvisionCode : CodeableConcept [];
   eligibility : CodeableConcept ;
   eligibilityNote : string ;
   programName : string [];
   characteristic : CodeableConcept [];
   referralMethod : CodeableConcept [];
   appointmentRequired : string ;
   availableTime : HealthcareService_AvailableTime [];
   notAvailable : HealthcareService_NotAvailable [];
   availabilityExceptions : string ;
   endpoint : Reference [];
}
