import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class Specimen_Collection      extends BackboneElement
{

   static def : string = 'Specimen_Collection';
   collector : Reference ;
   collectedDateTime : string ;
   collectedPeriod : Period ;
   quantity : Quantity ;
   method : CodeableConcept ;
   bodySite : CodeableConcept ;
}
