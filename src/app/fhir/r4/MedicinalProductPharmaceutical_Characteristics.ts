import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class MedicinalProductPharmaceutical_Characteristics      extends BackboneElement
{

   static def : string = 'MedicinalProductPharmaceutical_Characteristics';
   code : CodeableConcept ;
   status : CodeableConcept ;
}
