import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ClaimResponse_ProcessNote      extends BackboneElement
{

   static def : string = 'ClaimResponse_ProcessNote';
   number : string ;
   type : CodeableConcept ;
   text : string ;
   language : CodeableConcept ;
}
