import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicationDispenseStatusEnum } from './MedicationDispenseStatusEnum'
import { MedicationDispense_DosageInstruction } from './MedicationDispense_DosageInstruction'
import { MedicationDispense_Substitution } from './MedicationDispense_Substitution'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'

export class MedicationDispense      extends DomainResource
{

   static def : string = 'MedicationDispense';
   identifier : Identifier ;
   status : MedicationDispenseStatusEnum ;
   patient : Reference ;
   dispenser : Reference ;
   authorizingPrescription : Reference [];
   type : CodeableConcept ;
   quantity : SimpleQuantity ;
   daysSupply : SimpleQuantity ;
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   whenPrepared : string ;
   whenHandedOver : string ;
   destination : Reference ;
   receiver : Reference [];
   note : string ;
   dosageInstruction : MedicationDispense_DosageInstruction [];
   substitution : MedicationDispense_Substitution ;
}
