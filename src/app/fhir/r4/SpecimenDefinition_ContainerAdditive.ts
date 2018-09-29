import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class SpecimenDefinition_ContainerAdditive      extends BackboneElement
{

   static def : string = 'SpecimenDefinition_ContainerAdditive';
   additiveCodeableConcept : CodeableConcept ;
   additiveReference : Reference ;
}
