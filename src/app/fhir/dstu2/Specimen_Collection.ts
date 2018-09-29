import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'

export class Specimen_Collection      extends BackboneElement
{

   static def : string = 'Specimen_Collection';
   collector : Reference ;
   comment : string [];
   collectedDateTime : string ;
   collectedPeriod : Period ;
   quantity : SimpleQuantity ;
   method : CodeableConcept ;
   bodySite : CodeableConcept ;
}
