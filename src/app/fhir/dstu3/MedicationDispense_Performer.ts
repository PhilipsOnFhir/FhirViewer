import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MedicationDispense_Performer      extends BackboneElement
{

   static def : string = 'MedicationDispense_Performer';
   actor : Reference ;
   onBehalfOf : Reference ;
}
