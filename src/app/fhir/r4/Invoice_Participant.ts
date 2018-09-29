import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Invoice_Participant      extends BackboneElement
{

   static def : string = 'Invoice_Participant';
   role : CodeableConcept ;
   actor : Reference ;
}
