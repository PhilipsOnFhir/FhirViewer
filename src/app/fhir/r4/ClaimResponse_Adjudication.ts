import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Money } from './Money'

export class ClaimResponse_Adjudication      extends BackboneElement
{

   static def : string = 'ClaimResponse_Adjudication';
   category : CodeableConcept ;
   reason : CodeableConcept ;
   amount : Money ;
   value : string ;
}
