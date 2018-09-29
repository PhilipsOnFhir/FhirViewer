import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class SubstancePolymer_StructuralRepresentation      extends BackboneElement
{

   static def : string = 'SubstancePolymer_StructuralRepresentation';
   type : CodeableConcept ;
   representation : string ;
   attachment : Attachment ;
}
