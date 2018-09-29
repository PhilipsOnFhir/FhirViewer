import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Medication_Package } from './Medication_Package'
import { Medication_Product } from './Medication_Product'
import { Reference } from './Reference'

export class Medication      extends DomainResource
{

   static def : string = 'Medication';
   code : CodeableConcept ;
   isBrand : string ;
   manufacturer : Reference ;
   product : Medication_Product ;
   package : Medication_Package ;
}
