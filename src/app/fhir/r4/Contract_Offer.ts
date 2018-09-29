import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Contract_Offer      extends BackboneElement
{

   static def : string = 'Contract_Offer';
   topic : Reference ;
   type : CodeableConcept ;
   decision : CodeableConcept ;
   text : string ;
   linkId : string ;
}
