import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class VerificationResult_Validator      extends BackboneElement
{

   static def : string = 'VerificationResult_Validator';
   organization : Reference ;
   identityCertificate : string ;
   signedValidatorAttestationString : string ;
   signedValidatorAttestationUri : string ;
}
