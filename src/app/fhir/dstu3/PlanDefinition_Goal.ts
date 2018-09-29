import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { PlanDefinition_Target } from './PlanDefinition_Target'
import { RelatedArtifact } from './RelatedArtifact'

export class PlanDefinition_Goal      extends BackboneElement
{

   static def : string = 'PlanDefinition_Goal';
   category : CodeableConcept ;
   description : CodeableConcept ;
   priority : CodeableConcept ;
   start : CodeableConcept ;
   addresses : CodeableConcept [];
   documentation : RelatedArtifact [];
   target : PlanDefinition_Target [];
}
