import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Ratio } from './Ratio'

export class MedicationAdministration_Dosage      extends BackboneElement
{

   static def : string = 'MedicationAdministration_Dosage';
   text : string ;
   site : CodeableConcept ;
   route : CodeableConcept ;
   method : CodeableConcept ;
   dose : Quantity ;
   rateRatio : Ratio ;
   rateQuantity : Quantity ;
}
