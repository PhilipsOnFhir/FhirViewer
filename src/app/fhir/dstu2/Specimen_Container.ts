import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'

export class Specimen_Container      extends BackboneElement
{

   static def : string = 'Specimen_Container';
   identifier : Identifier [];
   description : string ;
   type : CodeableConcept ;
   capacity : SimpleQuantity ;
   specimenQuantity : SimpleQuantity ;
   additiveCodeableConcept : CodeableConcept ;
   additiveReference : Reference ;
}
