import { AdministrativeGenderEnum } from './AdministrativeGenderEnum'
import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { FamilyHistoryStatusEnum } from './FamilyHistoryStatusEnum'
import { FamilyMemberHistory_Condition } from './FamilyMemberHistory_Condition'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Range } from './Range'
import { Reference } from './Reference'

export class FamilyMemberHistory      extends DomainResource
{

   static def : string = 'FamilyMemberHistory';
   identifier : Identifier [];
   definition : Reference [];
   status : FamilyHistoryStatusEnum ;
   notDone : string ;
   notDoneReason : CodeableConcept ;
   patient : Reference ;
   date : string ;
   name : string ;
   relationship : CodeableConcept ;
   gender : AdministrativeGenderEnum ;
   bornPeriod : Period ;
   bornDate : string ;
   bornString : string ;
   ageAge : string ;
   ageRange : Range ;
   ageString : string ;
   estimatedAge : string ;
   deceasedBoolean : string ;
   deceasedAge : string ;
   deceasedRange : Range ;
   deceasedDate : string ;
   deceasedString : string ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   note : Annotation [];
   condition : FamilyMemberHistory_Condition [];
}
