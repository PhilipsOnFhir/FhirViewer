import { ActionCardinalityBehaviorEnum } from './ActionCardinalityBehaviorEnum'
import { ActionGroupingBehaviorEnum } from './ActionGroupingBehaviorEnum'
import { ActionPrecheckBehaviorEnum } from './ActionPrecheckBehaviorEnum'
import { ActionRequiredBehaviorEnum } from './ActionRequiredBehaviorEnum'
import { ActionSelectionBehaviorEnum } from './ActionSelectionBehaviorEnum'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DataRequirement } from './DataRequirement'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { PlanDefinition_Condition } from './PlanDefinition_Condition'
import { PlanDefinition_DynamicValue } from './PlanDefinition_DynamicValue'
import { PlanDefinition_Participant } from './PlanDefinition_Participant'
import { PlanDefinition_RelatedAction } from './PlanDefinition_RelatedAction'
import { Range } from './Range'
import { Reference } from './Reference'
import { RelatedArtifact } from './RelatedArtifact'
import { Timing } from './Timing'
import { TriggerDefinition } from './TriggerDefinition'

export class PlanDefinition_Action      extends BackboneElement
{

   static def : string = 'PlanDefinition_Action';
   label : string ;
   title : string ;
   description : string ;
   textEquivalent : string ;
   code : CodeableConcept [];
   reason : CodeableConcept [];
   documentation : RelatedArtifact [];
   goalId : string [];
   triggerDefinition : TriggerDefinition [];
   condition : PlanDefinition_Condition [];
   input : DataRequirement [];
   output : DataRequirement [];
   relatedAction : PlanDefinition_RelatedAction [];
   timingDateTime : string ;
   timingPeriod : Period ;
   timingDuration : string ;
   timingRange : Range ;
   timingTiming : Timing ;
   participant : PlanDefinition_Participant [];
   type : Coding ;
   groupingBehavior : ActionGroupingBehaviorEnum ;
   selectionBehavior : ActionSelectionBehaviorEnum ;
   requiredBehavior : ActionRequiredBehaviorEnum ;
   precheckBehavior : ActionPrecheckBehaviorEnum ;
   cardinalityBehavior : ActionCardinalityBehaviorEnum ;
   definition : Reference ;
   transform : Reference ;
   dynamicValue : PlanDefinition_DynamicValue [];
   action : PlanDefinition_Action [];
}
