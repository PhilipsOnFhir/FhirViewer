import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Schedule      extends DomainResource
{

   static def : string = 'Schedule';
   identifier : Identifier [];
   type : CodeableConcept [];
   actor : Reference ;
   planningHorizon : Period ;
   comment : string ;
}
