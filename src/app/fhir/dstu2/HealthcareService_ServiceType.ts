import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class HealthcareService_ServiceType      extends BackboneElement
{

   static def : string = 'HealthcareService_ServiceType';
   type : CodeableConcept ;
   specialty : CodeableConcept [];
}
