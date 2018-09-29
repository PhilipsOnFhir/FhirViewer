import { DomainResource } from './DomainResource'
import { MedicinalProductClinicals_Contraindication } from './MedicinalProductClinicals_Contraindication'
import { MedicinalProductClinicals_Interactions } from './MedicinalProductClinicals_Interactions'
import { MedicinalProductClinicals_TherapeuticIndication } from './MedicinalProductClinicals_TherapeuticIndication'
import { MedicinalProductClinicals_UndesirableEffects } from './MedicinalProductClinicals_UndesirableEffects'

export class MedicinalProductClinicals      extends DomainResource
{

   static def : string = 'MedicinalProductClinicals';
   undesirableEffects : MedicinalProductClinicals_UndesirableEffects [];
   therapeuticIndication : MedicinalProductClinicals_TherapeuticIndication [];
   contraindication : MedicinalProductClinicals_Contraindication [];
   interactions : MedicinalProductClinicals_Interactions [];
}
