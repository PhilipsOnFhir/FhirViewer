import { Age } from './Age'
import { CodeableConcept } from './CodeableConcept'
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
   patient : Reference ;
   encounter : Reference ;
   asserter : Reference ;
   dateRecorded : string ;
   code : CodeableConcept ;
   category : CodeableConcept ;
   clinicalStatus : string ;
   verificationStatus : ConditionVerificationStatusEnum ;
   severity : CodeableConcept ;
   onsetDateTime : string ;
   onsetQuantity : Age ;
   onsetPeriod : Period ;
   onsetRange : Range ;
   onsetString : string ;
   abatementDateTime : string ;
   abatementQuantity : Age ;
   abatementBoolean : string ;
   abatementPeriod : Period ;
   abatementRange : Range ;
   abatementString : string ;
   stage : Condition_Stage ;
   evidence : Condition_Evidence [];
   bodySite : CodeableConcept [];
   notes : string ;
}
