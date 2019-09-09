import { ActionParticipantTypeEnum } from './ActionParticipantTypeEnum'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ActivityDefinition_Participant      extends BackboneElement
{

   static def : string = 'ActivityDefinition_Participant';
   type : ActionParticipantTypeEnum ;
   role : CodeableConcept ;
}
