import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Ratio } from './Ratio'

export class Dosage_DoseAndRate      extends Element
{

   static def : string = 'Dosage_DoseAndRate';
   type : CodeableConcept ;
   doseRange : Range ;
   doseQuantity : Quantity ;
   rateRatio : Ratio ;
   rateRange : Range ;
   rateQuantity : Quantity ;
}
