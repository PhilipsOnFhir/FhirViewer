import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MeasureReport_Population      extends BackboneElement
{

   static def : string = 'MeasureReport_Population';
   code : CodeableConcept ;
   count : string ;
   subjects : Reference ;
}
