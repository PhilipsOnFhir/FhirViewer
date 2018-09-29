import { Age } from './Age'
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
   patient : Reference ;
   date : string ;
   status : FamilyHistoryStatusEnum ;
   name : string ;
   relationship : CodeableConcept ;
   gender : string ;
   bornPeriod : Period ;
   bornDate : string ;
   bornString : string ;
   ageQuantity : Age ;
   ageRange : Range ;
   ageString : string ;
   deceasedBoolean : string ;
   deceasedQuantity : Age ;
   deceasedRange : Range ;
   deceasedDate : string ;
   deceasedString : string ;
   note : Annotation ;
   condition : FamilyMemberHistory_Condition [];
}
