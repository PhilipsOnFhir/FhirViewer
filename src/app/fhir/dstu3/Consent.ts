import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ConsentStateEnum } from './ConsentStateEnum'
import { Consent_Actor } from './Consent_Actor'
import { Consent_Data } from './Consent_Data'
import { Consent_Except } from './Consent_Except'
import { Consent_Policy } from './Consent_Policy'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Consent      extends DomainResource
{

   static def : string = 'Consent';
   identifier : Identifier ;
   status : ConsentStateEnum ;
   category : CodeableConcept [];
   patient : Reference ;
   period : Period ;
   dateTime : string ;
   consentingParty : Reference [];
   actor : Consent_Actor [];
   action : CodeableConcept [];
   organization : Reference [];
   sourceAttachment : Attachment ;
   sourceIdentifier : Identifier ;
   sourceReference : Reference ;
   policy : Consent_Policy [];
   policyRule : string ;
   securityLabel : Coding [];
   purpose : Coding [];
   dataPeriod : Period ;
   data : Consent_Data [];
   except : Consent_Except [];
}
