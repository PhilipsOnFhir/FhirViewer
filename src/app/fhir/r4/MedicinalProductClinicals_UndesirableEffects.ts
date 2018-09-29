import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { MedicinalProductClinicals_Population } from './MedicinalProductClinicals_Population'

export class MedicinalProductClinicals_UndesirableEffects      extends BackboneElement
{

   static def : string = 'MedicinalProductClinicals_UndesirableEffects';
   symptomConditionEffect : CodeableConcept ;
   classification : CodeableConcept ;
   frequencyOfOccurrence : CodeableConcept ;
   population : MedicinalProductClinicals_Population [];
}
