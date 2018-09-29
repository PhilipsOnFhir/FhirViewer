import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Procedure_FocalDevice      extends BackboneElement
{

   static def : string = 'Procedure_FocalDevice';
   action : CodeableConcept ;
   manipulated : Reference ;
}
