import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { SpecimenDefinition_SpecimenToLab } from './SpecimenDefinition_SpecimenToLab'

export class SpecimenDefinition      extends DomainResource
{

   static def : string = 'SpecimenDefinition';
   identifier : Identifier ;
   typeCollected : CodeableConcept ;
   patientPreparation : string ;
   timeAspect : string ;
   collection : CodeableConcept [];
   specimenToLab : SpecimenDefinition_SpecimenToLab [];
}
