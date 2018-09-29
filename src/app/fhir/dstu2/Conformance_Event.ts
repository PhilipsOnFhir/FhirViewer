import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { ConformanceEventModeEnum } from './ConformanceEventModeEnum'
import { DomainResource } from './DomainResource'
import { MessageSignificanceCategoryEnum } from './MessageSignificanceCategoryEnum'
import { Reference } from './Reference'

export class Conformance_Event      extends BackboneElement
{

   static def : string = 'Conformance_Event';
   code : Coding ;
   category : MessageSignificanceCategoryEnum ;
   mode : ConformanceEventModeEnum ;
   focus : string ;
   request : Reference ;
   response : Reference ;
   documentation : string ;
}
