import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class MedicationKnowledge_MonitoringProgram      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_MonitoringProgram';
   type : CodeableConcept ;
   name : string ;
}
