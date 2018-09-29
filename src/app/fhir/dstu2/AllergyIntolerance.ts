import { AllergyIntoleranceCategoryEnum } from './AllergyIntoleranceCategoryEnum'
import { AllergyIntoleranceCriticalityEnum } from './AllergyIntoleranceCriticalityEnum'
import { AllergyIntoleranceStatusEnum } from './AllergyIntoleranceStatusEnum'
import { AllergyIntoleranceTypeEnum } from './AllergyIntoleranceTypeEnum'
import { AllergyIntolerance_Reaction } from './AllergyIntolerance_Reaction'
import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class AllergyIntolerance      extends DomainResource
{

   static def : string = 'AllergyIntolerance';
   identifier : Identifier [];
   onset : string ;
   recordedDate : string ;
   recorder : Reference ;
   patient : Reference ;
   reporter : Reference ;
   substance : CodeableConcept ;
   status : AllergyIntoleranceStatusEnum ;
   criticality : AllergyIntoleranceCriticalityEnum ;
   type : AllergyIntoleranceTypeEnum ;
   category : AllergyIntoleranceCategoryEnum ;
   lastOccurence : string ;
   note : Annotation ;
   reaction : AllergyIntolerance_Reaction [];
}
