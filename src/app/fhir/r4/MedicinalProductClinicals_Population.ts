import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Range } from './Range'

export class MedicinalProductClinicals_Population      extends BackboneElement
{

   static def : string = 'MedicinalProductClinicals_Population';
   ageRange : Range ;
   ageCodeableConcept : CodeableConcept ;
   gender : CodeableConcept ;
   race : CodeableConcept ;
   physiologicalCondition : CodeableConcept ;
}
