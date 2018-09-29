import { BackboneElement } from './BackboneElement'
import { ClaimResponse_Adjudication } from './ClaimResponse_Adjudication'
import { ClaimResponse_Detail1 } from './ClaimResponse_Detail1'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ClaimResponse_AddItem      extends BackboneElement
{

   static def : string = 'ClaimResponse_AddItem';
   sequenceLinkId : string [];
   revenue : CodeableConcept ;
   category : CodeableConcept ;
   service : CodeableConcept ;
   modifier : CodeableConcept [];
   fee : string ;
   noteNumber : string [];
   adjudication : ClaimResponse_Adjudication [];
   detail : ClaimResponse_Detail1 [];
}
