import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ObservationStatusEnum } from './ObservationStatusEnum'
import { Observation_Component } from './Observation_Component'
import { Observation_ReferenceRange } from './Observation_ReferenceRange'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Ratio } from './Ratio'
import { Reference } from './Reference'
import { SampledData } from './SampledData'
import { Timing } from './Timing'

export class Observation      extends DomainResource
{

   static def : string = 'Observation';
   identifier : Identifier [];
   basedOn : Reference [];
   partOf : Reference [];
   status : ObservationStatusEnum ;
   category : CodeableConcept [];
   code : CodeableConcept ;
   subject : Reference ;
   focus : Reference ;
   context : Reference ;
   effectiveDateTime : string ;
   effectivePeriod : Period ;
   effectiveTiming : Timing ;
   issued : string ;
   performer : Reference [];
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
   comment : string ;
   bodySite : CodeableConcept ;
   method : CodeableConcept ;
   specimen : Reference ;
   device : Reference ;
   referenceRange : Observation_ReferenceRange [];
   hasMember : Reference [];
   derivedFrom : Reference [];
   component : Observation_Component [];
}
