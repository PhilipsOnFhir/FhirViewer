import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ChargeItem_Performer      extends BackboneElement
{

   static def : string = 'ChargeItem_Performer';
   function : CodeableConcept ;
   actor : Reference ;
}
