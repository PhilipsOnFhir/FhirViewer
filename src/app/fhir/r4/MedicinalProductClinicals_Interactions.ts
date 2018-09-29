import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class MedicinalProductClinicals_Interactions      extends BackboneElement
{

   static def : string = 'MedicinalProductClinicals_Interactions';
   interactant : CodeableConcept [];
   type : CodeableConcept ;
   effect : CodeableConcept ;
   incidence : CodeableConcept ;
   management : CodeableConcept ;
}
