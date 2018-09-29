import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DataRequirement } from './DataRequirement'
import { DomainResource } from './DomainResource'
import { GuidanceResponseStatusEnum } from './GuidanceResponseStatusEnum'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class GuidanceResponse      extends DomainResource
{

   static def : string = 'GuidanceResponse';
   requestId : string ;
   identifier : Identifier [];
   moduleUri : string ;
   moduleCanonical : string ;
   moduleCodeableConcept : CodeableConcept ;
   status : GuidanceResponseStatusEnum ;
   subject : Reference ;
   context : Reference ;
   occurrenceDateTime : string ;
   performer : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   note : Annotation [];
   evaluationMessage : Reference [];
   outputParameters : Reference ;
   result : Reference ;
   dataRequirement : DataRequirement [];
}
