import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MeasureReport_Population1      extends BackboneElement
{

   static def : string = 'MeasureReport_Population1';
   code : CodeableConcept ;
   count : string ;
   subjects : Reference ;
}
