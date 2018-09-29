import { AllergyIntoleranceCategoryEnum } from './AllergyIntoleranceCategoryEnum'
import { AllergyIntoleranceClinicalStatusEnum } from './AllergyIntoleranceClinicalStatusEnum'
import { AllergyIntoleranceCriticalityEnum } from './AllergyIntoleranceCriticalityEnum'
import { AllergyIntoleranceTypeEnum } from './AllergyIntoleranceTypeEnum'
import { AllergyIntoleranceVerificationStatusEnum } from './AllergyIntoleranceVerificationStatusEnum'
import { AllergyIntolerance_Reaction } from './AllergyIntolerance_Reaction'
import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Range } from './Range'
import { Reference } from './Reference'

export class AllergyIntolerance      extends DomainResource
{

   static def : string = 'AllergyIntolerance';
   identifier : Identifier [];
   clinicalStatus : AllergyIntoleranceClinicalStatusEnum ;
   verificationStatus : AllergyIntoleranceVerificationStatusEnum ;
   type : AllergyIntoleranceTypeEnum ;
   category : AllergyIntoleranceCategoryEnum [];
   criticality : AllergyIntoleranceCriticalityEnum ;
   code : CodeableConcept ;
   patient : Reference ;
   encounter : Reference ;
   onsetDateTime : string ;
   onsetAge : string ;
   onsetPeriod : Period ;
   onsetRange : Range ;
   onsetString : string ;
   recordedDate : string ;
   recorder : Reference ;
   asserter : Reference ;
   lastOccurrence : string ;
   note : Annotation [];
   reaction : AllergyIntolerance_Reaction [];
}
