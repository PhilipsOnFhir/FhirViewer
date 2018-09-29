import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { ReferralRequest_Requester } from './ReferralRequest_Requester'
import { RequestIntentEnum } from './RequestIntentEnum'
import { RequestPriorityEnum } from './RequestPriorityEnum'
import { RequestStatusEnum } from './RequestStatusEnum'

export class ReferralRequest      extends DomainResource
{

   static def : string = 'ReferralRequest';
   identifier : Identifier [];
   definition : Reference [];
   basedOn : Reference [];
   replaces : Reference [];
   groupIdentifier : Identifier ;
   status : RequestStatusEnum ;
   intent : RequestIntentEnum ;
   type : CodeableConcept ;
   priority : RequestPriorityEnum ;
   serviceRequested : CodeableConcept [];
   subject : Reference ;
   context : Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   authoredOn : string ;
   requester : ReferralRequest_Requester ;
   specialty : CodeableConcept ;
   recipient : Reference [];
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   description : string ;
   supportingInfo : Reference [];
   note : Annotation [];
   relevantHistory : Reference [];
}
