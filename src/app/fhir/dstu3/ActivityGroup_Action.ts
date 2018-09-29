import { ActivityGroup_RelatedAction } from './ActivityGroup_RelatedAction'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Range } from './Range'
import { Reference } from './Reference'
import { RelatedArtifact } from './RelatedArtifact'

export class ActivityGroup_Action      extends BackboneElement
{

   static def : string = 'ActivityGroup_Action';
   actionIdentifier : Identifier ;
   label : string ;
   title : string ;
   description : string ;
   textEquivalent : string ;
   concept : CodeableConcept [];
   documentation : RelatedArtifact [];
   relatedAction : ActivityGroup_RelatedAction ;
   timingDateTime : string ;
   timingPeriod : Period ;
   timingDuration : string ;
   timingRange : Range ;
   participant : Reference [];
   type : Coding ;
   groupingBehavior : string ;
   selectionBehavior : string ;
   requiredBehavior : string ;
   precheckBehavior : string ;
   cardinalityBehavior : string ;
   resource : Reference ;
   action : ActivityGroup_Action [];
}
