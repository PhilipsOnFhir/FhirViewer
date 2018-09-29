import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MedicationAdministration_Performer      extends BackboneElement
{

   static def : string = 'MedicationAdministration_Performer';
   actor : Reference ;
   onBehalfOf : Reference ;
}
