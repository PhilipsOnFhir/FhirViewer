import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Schedule      extends DomainResource
{

   static def : string = 'Schedule';
   identifier : Identifier [];
   active : string ;
   serviceCategory : CodeableConcept [];
   serviceType : CodeableConcept [];
   specialty : CodeableConcept [];
   actor : Reference [];
   planningHorizon : Period ;
   comment : string ;
}
