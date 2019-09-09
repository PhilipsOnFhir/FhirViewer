import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ProcessResponse_ProcessNote      extends BackboneElement
{

   static def : string = 'ProcessResponse_ProcessNote';
   type : CodeableConcept ;
   text : string ;
}
