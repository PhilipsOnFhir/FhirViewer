import { ActivityGroup_Action } from './ActivityGroup_Action'
import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class ActivityGroup      extends DomainResource
{

   static def : string = 'ActivityGroup';
   identifier : Identifier ;
   subject : Reference ;
   context : Reference ;
   occurrenceDateTime : string ;
   author : Reference ;
   reasonCodeableConcept : CodeableConcept ;
   reasonReference : Reference ;
   note : Annotation [];
   action : ActivityGroup_Action [];
}
