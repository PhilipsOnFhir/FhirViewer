import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Specimen_Treatment      extends BackboneElement
{

   static def : string = 'Specimen_Treatment';
   description : string ;
   procedure : CodeableConcept ;
   additive : Reference [];
}
