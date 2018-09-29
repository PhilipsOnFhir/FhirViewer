import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class BodyStructure      extends DomainResource
{

   static def : string = 'BodyStructure';
   identifier : Identifier [];
   active : string ;
   morphology : CodeableConcept ;
   location : CodeableConcept ;
   locationQualifier : CodeableConcept [];
   description : string ;
   image : Attachment [];
   patient : Reference ;
}
