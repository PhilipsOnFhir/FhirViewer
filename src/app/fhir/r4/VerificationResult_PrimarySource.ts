import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class VerificationResult_PrimarySource      extends BackboneElement
{

   static def : string = 'VerificationResult_PrimarySource';
   organization : Reference ;
   type : CodeableConcept [];
   validationProcess : CodeableConcept [];
   validationStatus : CodeableConcept ;
   validationDate : string ;
   canPushUpdates : CodeableConcept ;
   pushTypeAvailable : CodeableConcept [];
}
