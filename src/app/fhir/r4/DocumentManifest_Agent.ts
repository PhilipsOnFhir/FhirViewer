import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class DocumentManifest_Agent      extends BackboneElement
{

   static def : string = 'DocumentManifest_Agent';
   type : CodeableConcept ;
   who : Reference ;
}
