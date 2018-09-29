import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { VisionPrescription_Dispense } from './VisionPrescription_Dispense'

export class VisionPrescription      extends DomainResource
{

   static def : string = 'VisionPrescription';
   identifier : Identifier [];
   dateWritten : string ;
   patient : Reference ;
   prescriber : Reference ;
   encounter : Reference ;
   reasonCodeableConcept : CodeableConcept ;
   reasonReference : Reference ;
   dispense : VisionPrescription_Dispense [];
}
