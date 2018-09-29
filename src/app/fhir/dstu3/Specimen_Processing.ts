import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'

export class Specimen_Processing      extends BackboneElement
{

   static def : string = 'Specimen_Processing';
   description : string ;
   procedure : CodeableConcept ;
   additive : Reference [];
   timeDateTime : string ;
   timePeriod : Period ;
}
