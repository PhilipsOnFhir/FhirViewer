import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ClaimResponse_Error      extends BackboneElement
{

   static def : string = 'ClaimResponse_Error';
   sequenceLinkId : string ;
   detailSequenceLinkId : string ;
   subdetailSequenceLinkId : string ;
   code : CodeableConcept ;
}
