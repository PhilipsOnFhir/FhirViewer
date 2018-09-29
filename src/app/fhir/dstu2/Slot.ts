import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { SlotStatusEnum } from './SlotStatusEnum'

export class Slot      extends DomainResource
{

   static def : string = 'Slot';
   identifier : Identifier [];
   type : CodeableConcept ;
   schedule : Reference ;
   freeBusyType : SlotStatusEnum ;
   start : string ;
   end : string ;
   overbooked : string ;
   comment : string ;
}
