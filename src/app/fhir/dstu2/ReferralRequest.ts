import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { ReferralStatusEnum } from './ReferralStatusEnum'

export class ReferralRequest      extends DomainResource
{

   static def : string = 'ReferralRequest';
   status : ReferralStatusEnum ;
   identifier : Identifier [];
   date : string ;
   type : CodeableConcept ;
   specialty : CodeableConcept ;
   priority : CodeableConcept ;
   patient : Reference ;
   requester : Reference ;
   recipient : Reference [];
   encounter : Reference ;
   dateSent : string ;
   reason : CodeableConcept ;
   description : string ;
   serviceRequested : CodeableConcept [];
   supportingInformation : Reference [];
   fulfillmentTime : Period ;
}
