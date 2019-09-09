import { BackboneElement } from './BackboneElement'
import { ClaimResponse_Adjudication } from './ClaimResponse_Adjudication'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ClaimResponse_Detail1      extends BackboneElement
{

   static def : string = 'ClaimResponse_Detail1';
   revenue : CodeableConcept ;
   category : CodeableConcept ;
   service : CodeableConcept ;
   modifier : CodeableConcept [];
   fee : string ;
   noteNumber : string [];
   adjudication : ClaimResponse_Adjudication [];
}
