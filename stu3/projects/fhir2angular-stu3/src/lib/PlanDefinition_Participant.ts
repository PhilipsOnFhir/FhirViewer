import { ActionParticipantTypeEnum } from './ActionParticipantTypeEnum'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class PlanDefinition_Participant      extends BackboneElement
{

   static def : string = 'PlanDefinition_Participant';
   type : ActionParticipantTypeEnum ;
   role : CodeableConcept ;
}
