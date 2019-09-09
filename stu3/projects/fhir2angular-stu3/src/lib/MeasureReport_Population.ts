import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class MeasureReport_Population      extends BackboneElement
{

   static def : string = 'MeasureReport_Population';
   identifier : Identifier ;
   code : CodeableConcept ;
   count : string ;
   patients : Reference ;
}
