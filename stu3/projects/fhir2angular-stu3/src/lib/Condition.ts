import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { ConditionClinicalStatusCodesEnum } from './ConditionClinicalStatusCodesEnum'
import { ConditionVerificationStatusEnum } from './ConditionVerificationStatusEnum'
import { Condition_Evidence } from './Condition_Evidence'
import { Condition_Stage } from './Condition_Stage'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Range } from './Range'
import { Reference } from './Reference'

export class Condition      extends DomainResource
{

   static def : string = 'Condition';
   identifier : Identifier [];
   clinicalStatus : ConditionClinicalStatusCodesEnum ;
   verificationStatus : ConditionVerificationStatusEnum ;
   category : CodeableConcept [];
   severity : CodeableConcept ;
   code : CodeableConcept ;
   bodySite : CodeableConcept [];
   subject : Reference ;
   context : Reference ;
   onsetDateTime : string ;
   onsetAge : string ;
   onsetPeriod : Period ;
   onsetRange : Range ;
   onsetString : string ;
   abatementDateTime : string ;
   abatementAge : string ;
   abatementBoolean : boolean ;
   abatementPeriod : Period ;
   abatementRange : Range ;
   abatementString : string ;
   assertedDate : string ;
   asserter : Reference ;
   stage : Condition_Stage ;
   evidence : Condition_Evidence [];
   note : Annotation [];
}
