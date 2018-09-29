import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Procedure_Performer      extends BackboneElement
{

   static def : string = 'Procedure_Performer';
   role : CodeableConcept ;
   actor : Reference ;
   onBehalfOf : Reference ;
}
