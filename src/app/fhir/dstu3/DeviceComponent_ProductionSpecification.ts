import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class DeviceComponent_ProductionSpecification      extends BackboneElement
{

   static def : string = 'DeviceComponent_ProductionSpecification';
   specType : CodeableConcept ;
   componentId : Identifier ;
   productionSpec : string ;
}
