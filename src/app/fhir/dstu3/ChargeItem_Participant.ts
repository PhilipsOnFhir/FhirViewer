import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ChargeItem_Participant      extends BackboneElement
{

   static def : string = 'ChargeItem_Participant';
   role : CodeableConcept ;
   actor : Reference ;
}
