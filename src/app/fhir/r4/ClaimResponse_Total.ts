import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Money } from './Money'

export class ClaimResponse_Total      extends BackboneElement
{

   static def : string = 'ClaimResponse_Total';
   category : CodeableConcept ;
   amount : Money ;
}
