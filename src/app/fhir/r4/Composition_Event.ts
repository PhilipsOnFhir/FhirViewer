import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'

export class Composition_Event      extends BackboneElement
{

   static def : string = 'Composition_Event';
   code : CodeableConcept [];
   period : Period ;
   detail : Reference [];
}
