import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class MedicationKnowledge_MaxDispense      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_MaxDispense';
   quantity : Quantity ;
   period : string ;
}
