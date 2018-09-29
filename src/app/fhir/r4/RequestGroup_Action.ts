import { ActionCardinalityBehaviorEnum } from './ActionCardinalityBehaviorEnum'
import { ActionGroupingBehaviorEnum } from './ActionGroupingBehaviorEnum'
import { ActionPrecheckBehaviorEnum } from './ActionPrecheckBehaviorEnum'
import { ActionRequiredBehaviorEnum } from './ActionRequiredBehaviorEnum'
import { ActionSelectionBehaviorEnum } from './ActionSelectionBehaviorEnum'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Range } from './Range'
import { Reference } from './Reference'
import { RelatedArtifact } from './RelatedArtifact'
import { RequestGroup_Condition } from './RequestGroup_Condition'
import { RequestGroup_RelatedAction } from './RequestGroup_RelatedAction'
import { Timing } from './Timing'

export class RequestGroup_Action      extends BackboneElement
{

   static def : string = 'RequestGroup_Action';
   prefix : string ;
   title : string ;
   description : string ;
   textEquivalent : string ;
   code : CodeableConcept [];
   documentation : RelatedArtifact [];
   condition : RequestGroup_Condition [];
   relatedAction : RequestGroup_RelatedAction [];
   timingDateTime : string ;
   timingAge : string ;
   timingPeriod : Period ;
   timingDuration : string ;
   timingRange : Range ;
   timingTiming : Timing ;
   participant : Reference [];
   type : CodeableConcept ;
   groupingBehavior : ActionGroupingBehaviorEnum ;
   selectionBehavior : ActionSelectionBehaviorEnum ;
   requiredBehavior : ActionRequiredBehaviorEnum ;
   precheckBehavior : ActionPrecheckBehaviorEnum ;
   cardinalityBehavior : ActionCardinalityBehaviorEnum ;
   resource : Reference ;
   action : RequestGroup_Action [];
}
