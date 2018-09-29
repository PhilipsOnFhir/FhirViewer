import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { Timing } from './Timing'
import { VerificationResult_Attestation } from './VerificationResult_Attestation'
import { VerificationResult_PrimarySource } from './VerificationResult_PrimarySource'
import { VerificationResult_Validator } from './VerificationResult_Validator'

export class VerificationResult      extends DomainResource
{

   static def : string = 'VerificationResult';
   target : Reference [];
   targetLocation : string [];
   need : CodeableConcept ;
   status : string ;
   statusDate : string ;
   validationType : CodeableConcept ;
   validationProcess : CodeableConcept [];
   frequency : Timing ;
   lastPerformed : string ;
   nextScheduled : string ;
   failureAction : CodeableConcept ;
   primarySource : VerificationResult_PrimarySource [];
   attestation : VerificationResult_Attestation ;
   validator : VerificationResult_Validator [];
}
