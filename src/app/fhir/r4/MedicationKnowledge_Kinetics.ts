import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class MedicationKnowledge_Kinetics      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_Kinetics';
   areaUnderCurve : Quantity [];
   lethalDose50 : Quantity [];
   halfLifePeriod : string ;
}
