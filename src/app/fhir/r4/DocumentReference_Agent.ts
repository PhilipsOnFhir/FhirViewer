import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class DocumentReference_Agent      extends BackboneElement
{

   static def : string = 'DocumentReference_Agent';
   type : CodeableConcept ;
   who : Reference ;
}
