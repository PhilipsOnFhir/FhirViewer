import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Provenance_Agent } from './Provenance_Agent'
import { Provenance_Entity } from './Provenance_Entity'
import { Reference } from './Reference'
import { Signature } from './Signature'

export class Provenance      extends DomainResource
{

   static def : string = 'Provenance';
   target : Reference [];
   period : Period ;
   recorded : string ;
   reason : CodeableConcept [];
   activity : CodeableConcept ;
   location : Reference ;
   policy : string [];
   agent : Provenance_Agent [];
   entity : Provenance_Entity [];
   signature : Signature [];
}
