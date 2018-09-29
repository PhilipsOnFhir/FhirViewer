import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class Consent_Policy      extends BackboneElement
{

   static def : string = 'Consent_Policy';
   authority : string ;
   uri : string ;
}
