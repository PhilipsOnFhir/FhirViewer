import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { NoteTypeEnum } from './NoteTypeEnum'

export class ClaimResponse_ProcessNote      extends BackboneElement
{

   static def : string = 'ClaimResponse_ProcessNote';
   number : string ;
   type : NoteTypeEnum ;
   text : string ;
   language : CodeableConcept ;
}
