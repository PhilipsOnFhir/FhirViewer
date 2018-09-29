import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { NoteTypeEnum } from './NoteTypeEnum'

export class ProcessResponse_ProcessNote      extends BackboneElement
{

   static def : string = 'ProcessResponse_ProcessNote';
   type : NoteTypeEnum ;
   text : string ;
}
