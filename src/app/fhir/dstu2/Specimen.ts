import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { SpecimenStatusEnum } from './SpecimenStatusEnum'
import { Specimen_Collection } from './Specimen_Collection'
import { Specimen_Container } from './Specimen_Container'
import { Specimen_Treatment } from './Specimen_Treatment'

export class Specimen      extends DomainResource
{

   static def : string = 'Specimen';
   identifier : Identifier [];
   status : SpecimenStatusEnum ;
   type : CodeableConcept ;
   parent : Reference [];
   subject : Reference ;
   accessionIdentifier : Identifier ;
   receivedTime : string ;
   collection : Specimen_Collection ;
   treatment : Specimen_Treatment [];
   container : Specimen_Container [];
}
