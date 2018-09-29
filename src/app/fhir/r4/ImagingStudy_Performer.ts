import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ImagingStudy_Performer      extends BackboneElement
{

   static def : string = 'ImagingStudy_Performer';
   function : CodeableConcept ;
   actor : Reference ;
}
