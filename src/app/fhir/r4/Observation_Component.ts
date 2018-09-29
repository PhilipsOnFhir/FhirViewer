import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Observation_ReferenceRange } from './Observation_ReferenceRange'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Ratio } from './Ratio'
import { SampledData } from './SampledData'

export class Observation_Component      extends BackboneElement
{

   static def : string = 'Observation_Component';
   code : CodeableConcept ;
   valueQuantity : Quantity ;
   valueCodeableConcept : CodeableConcept ;
   valueString : string ;
   valueBoolean : string ;
   valueInteger : string ;
   valueRange : Range ;
   valueRatio : Ratio ;
   valueSampledData : SampledData ;
   valueTime : string ;
   valueDateTime : string ;
   valuePeriod : Period ;
   dataAbsentReason : CodeableConcept ;
   interpretation : CodeableConcept ;
   referenceRange : Observation_ReferenceRange [];
}
