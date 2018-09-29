import { CodeableConcept } from './CodeableConcept'
import { DeviceComponent_ProductionSpecification } from './DeviceComponent_ProductionSpecification'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class DeviceComponent      extends DomainResource
{

   static def : string = 'DeviceComponent';
   type : CodeableConcept ;
   identifier : Identifier ;
   lastSystemChange : string ;
   source : Reference ;
   parent : Reference ;
   operationalStatus : CodeableConcept [];
   parameterGroup : CodeableConcept ;
   measurementPrinciple : string ;
   productionSpecification : DeviceComponent_ProductionSpecification [];
   languageCode : CodeableConcept ;
}
