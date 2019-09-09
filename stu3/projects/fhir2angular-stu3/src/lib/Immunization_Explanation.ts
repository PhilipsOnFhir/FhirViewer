import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class Immunization_Explanation      extends BackboneElement
{

   static def : string = 'Immunization_Explanation';
   reason : CodeableConcept [];
   reasonNotGiven : CodeableConcept [];
}
