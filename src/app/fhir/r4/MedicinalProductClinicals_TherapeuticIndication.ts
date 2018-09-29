import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { MedicinalProductClinicals_OtherTherapy } from './MedicinalProductClinicals_OtherTherapy'
import { MedicinalProductClinicals_Population } from './MedicinalProductClinicals_Population'
import { MedicinalProductClinicals_UndesirableEffects } from './MedicinalProductClinicals_UndesirableEffects'
import { Quantity } from './Quantity'

export class MedicinalProductClinicals_TherapeuticIndication      extends BackboneElement
{

   static def : string = 'MedicinalProductClinicals_TherapeuticIndication';
   diseaseSymptomProcedure : CodeableConcept ;
   diseaseStatus : CodeableConcept ;
   comorbidity : CodeableConcept [];
   intendedEffect : CodeableConcept ;
   duration : Quantity ;
   undesirableEffects : MedicinalProductClinicals_UndesirableEffects [];
   otherTherapy : MedicinalProductClinicals_OtherTherapy [];
   population : MedicinalProductClinicals_Population [];
}
