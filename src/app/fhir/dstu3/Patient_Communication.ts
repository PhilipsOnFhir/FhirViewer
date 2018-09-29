import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class Patient_Communication      extends BackboneElement
{

   static def : string = 'Patient_Communication';
   language : CodeableConcept ;
   preferred : string ;
}
