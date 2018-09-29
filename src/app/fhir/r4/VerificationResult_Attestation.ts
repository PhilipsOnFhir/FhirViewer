import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class VerificationResult_Attestation      extends BackboneElement
{

   static def : string = 'VerificationResult_Attestation';
   source : Reference ;
   organization : Reference ;
   method : CodeableConcept ;
   date : string ;
   sourceIdentityCertificate : string ;
   proxyIdentityCertificate : string ;
   signedProxyRightString : string ;
   signedProxyRightUri : string ;
   signedSourceAttestationString : string ;
   signedSourceAttestationUri : string ;
}
