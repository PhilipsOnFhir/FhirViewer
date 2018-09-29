import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class Patient_Animal      extends BackboneElement
{

   static def : string = 'Patient_Animal';
   species : CodeableConcept ;
   breed : CodeableConcept ;
   genderStatus : CodeableConcept ;
}
