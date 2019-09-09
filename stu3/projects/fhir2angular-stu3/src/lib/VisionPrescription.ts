import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { VisionPrescription_Dispense } from './VisionPrescription_Dispense'

export class VisionPrescription      extends DomainResource
{

   static def : string = 'VisionPrescription';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   patient : Reference ;
   encounter : Reference ;
   dateWritten : string ;
   prescriber : Reference ;
   reasonCodeableConcept : CodeableConcept ;
   reasonReference : Reference ;
   dispense : VisionPrescription_Dispense [];
}
