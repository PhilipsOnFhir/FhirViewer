import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { SpecimenContainedPreferenceEnum } from './SpecimenContainedPreferenceEnum'
import { SpecimenDefinition_ContainerAdditive } from './SpecimenDefinition_ContainerAdditive'
import { SpecimenDefinition_Handling } from './SpecimenDefinition_Handling'

export class SpecimenDefinition_SpecimenToLab      extends BackboneElement
{

   static def : string = 'SpecimenDefinition_SpecimenToLab';
   isDerived : string ;
   type : CodeableConcept ;
   preference : SpecimenContainedPreferenceEnum ;
   containerMaterial : CodeableConcept ;
   containerType : CodeableConcept ;
   containerCap : CodeableConcept ;
   containerDescription : string ;
   containerCapacity : Quantity ;
   containerMinimumVolume : Quantity ;
   containerAdditive : SpecimenDefinition_ContainerAdditive [];
   containerPreparation : string ;
   requirement : string ;
   retentionTime : string ;
   rejectionCriterion : CodeableConcept [];
   handling : SpecimenDefinition_Handling [];
}
