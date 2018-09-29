import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { MedicinalProductClinicals_OtherTherapy } from './MedicinalProductClinicals_OtherTherapy'
import { MedicinalProductClinicals_Population } from './MedicinalProductClinicals_Population'
import { MedicinalProductClinicals_TherapeuticIndication } from './MedicinalProductClinicals_TherapeuticIndication'

export class MedicinalProductClinicals_Contraindication      extends BackboneElement
{

   static def : string = 'MedicinalProductClinicals_Contraindication';
   disease : CodeableConcept ;
   diseaseStatus : CodeableConcept ;
   comorbidity : CodeableConcept [];
   therapeuticIndication : MedicinalProductClinicals_TherapeuticIndication [];
   otherTherapy : MedicinalProductClinicals_OtherTherapy [];
   population : MedicinalProductClinicals_Population [];
}
