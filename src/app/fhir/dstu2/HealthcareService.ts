import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { HealthcareService_AvailableTime } from './HealthcareService_AvailableTime'
import { HealthcareService_NotAvailable } from './HealthcareService_NotAvailable'
import { HealthcareService_ServiceType } from './HealthcareService_ServiceType'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class HealthcareService      extends DomainResource
{

   static def : string = 'HealthcareService';
   identifier : Identifier [];
   providedBy : Reference ;
   serviceCategory : CodeableConcept ;
   serviceType : HealthcareService_ServiceType [];
   location : Reference ;
   serviceName : string ;
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
   publicKey : string ;
   appointmentRequired : string ;
   availableTime : HealthcareService_AvailableTime [];
   notAvailable : HealthcareService_NotAvailable [];
   availabilityExceptions : string ;
}
