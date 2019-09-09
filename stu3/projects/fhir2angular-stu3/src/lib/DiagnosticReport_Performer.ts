import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class DiagnosticReport_Performer      extends BackboneElement
{

   static def : string = 'DiagnosticReport_Performer';
   role : CodeableConcept ;
   actor : Reference ;
}
