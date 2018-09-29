import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { NoteTypeEnum } from './NoteTypeEnum'

export class ExplanationOfBenefit_ProcessNote      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_ProcessNote';
   number : string ;
   type : NoteTypeEnum ;
   text : string ;
   language : CodeableConcept ;
}
