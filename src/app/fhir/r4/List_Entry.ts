import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class List_Entry      extends BackboneElement
{

   static def : string = 'List_Entry';
   flag : CodeableConcept ;
   deleted : string ;
   date : string ;
   item : Reference ;
}
