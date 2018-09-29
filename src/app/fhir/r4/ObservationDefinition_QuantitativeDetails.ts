import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class ObservationDefinition_QuantitativeDetails      extends BackboneElement
{

   static def : string = 'ObservationDefinition_QuantitativeDetails';
   customaryUnit : Coding ;
   unit : Coding ;
   conversionFactor : string ;
   decimalPrecision : string ;
}
