import { BackboneElement } from './BackboneElement'
import { ClaimResponse_Adjudication } from './ClaimResponse_Adjudication'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Money } from './Money'

export class ClaimResponse_AddItem      extends BackboneElement
{

   static def : string = 'ClaimResponse_AddItem';
   itemSequence : string [];
   detailSequence : string [];
   subdetailSequence : string [];
   service : CodeableConcept ;
   modifier : CodeableConcept [];
   fee : Money ;
   noteNumber : string [];
   adjudication : ClaimResponse_Adjudication [];
}
