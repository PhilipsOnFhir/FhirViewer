import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { SpecimenStatusEnum } from './SpecimenStatusEnum'
import { Specimen_Collection } from './Specimen_Collection'
import { Specimen_Container } from './Specimen_Container'
import { Specimen_Processing } from './Specimen_Processing'

export class Specimen      extends DomainResource
{

   static def : string = 'Specimen';
   identifier : Identifier [];
   accessionIdentifier : Identifier ;
   status : SpecimenStatusEnum ;
   type : CodeableConcept ;
   subject : Reference ;
   receivedTime : string ;
   parent : Reference [];
   request : Reference [];
   collection : Specimen_Collection ;
   processing : Specimen_Processing [];
   container : Specimen_Container [];
   note : Annotation [];
}
