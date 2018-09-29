import { AllergyIntoleranceCertaintyEnum } from './AllergyIntoleranceCertaintyEnum'
import { AllergyIntoleranceSeverityEnum } from './AllergyIntoleranceSeverityEnum'
import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class AllergyIntolerance_Reaction      extends BackboneElement
{

   static def : string = 'AllergyIntolerance_Reaction';
   substance : CodeableConcept ;
   certainty : AllergyIntoleranceCertaintyEnum ;
   manifestation : CodeableConcept [];
   description : string ;
   onset : string ;
   severity : AllergyIntoleranceSeverityEnum ;
   exposureRoute : CodeableConcept ;
   note : Annotation ;
}
