import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Range } from './Range'

export class SpecimenDefinition_Handling      extends BackboneElement
{

   static def : string = 'SpecimenDefinition_Handling';
   conditionSet : CodeableConcept ;
   tempRange : Range ;
   maxDuration : string ;
   lightExposure : string ;
   instruction : string ;
}
