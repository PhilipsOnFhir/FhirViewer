import { CodeableConcept } from './CodeableConcept'
import { DeviceComponent_ProductionSpecification } from './DeviceComponent_ProductionSpecification'
import { DeviceComponent_Property } from './DeviceComponent_Property'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MeasmntPrincipleEnum } from './MeasmntPrincipleEnum'
import { Reference } from './Reference'

export class DeviceComponent      extends DomainResource
{

   static def : string = 'DeviceComponent';
   identifier : Identifier [];
   type : CodeableConcept ;
   lastSystemChange : string ;
   source : Reference ;
   parent : Reference ;
   operationalStatus : CodeableConcept [];
   parameterGroup : CodeableConcept ;
   measurementPrinciple : MeasmntPrincipleEnum ;
   productionSpecification : DeviceComponent_ProductionSpecification [];
   languageCode : CodeableConcept ;
   property : DeviceComponent_Property [];
}
