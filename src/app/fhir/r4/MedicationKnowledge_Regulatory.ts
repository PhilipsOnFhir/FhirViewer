import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { MedicationKnowledge_MaxDispense } from './MedicationKnowledge_MaxDispense'
import { MedicationKnowledge_Schedule } from './MedicationKnowledge_Schedule'
import { MedicationKnowledge_Substitution } from './MedicationKnowledge_Substitution'

export class MedicationKnowledge_Regulatory      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_Regulatory';
   substitution : MedicationKnowledge_Substitution [];
   schedule : MedicationKnowledge_Schedule [];
   maxDispense : MedicationKnowledge_MaxDispense ;
}
