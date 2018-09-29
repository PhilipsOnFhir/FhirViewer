import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { Consent_Policy } from './Consent_Policy'
import { Consent_Provision } from './Consent_Provision'
import { Consent_Verification } from './Consent_Verification'
import { DomainResource } from './DomainResource'
import { EventStatusEnum } from './EventStatusEnum'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Consent      extends DomainResource
{

   static def : string = 'Consent';
   identifier : Identifier [];
   status : EventStatusEnum ;
   scope : CodeableConcept ;
   category : CodeableConcept [];
   patient : Reference ;
   dateTime : string ;
   performer : Reference [];
   organization : Reference [];
   sourceAttachment : Attachment ;
   sourceIdentifier : Identifier ;
   sourceReference : Reference ;
   policy : Consent_Policy [];
   policyRule : CodeableConcept ;
   verification : Consent_Verification [];
   provision : Consent_Provision ;
}
