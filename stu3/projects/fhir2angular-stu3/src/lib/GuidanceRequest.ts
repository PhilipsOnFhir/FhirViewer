import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class GuidanceRequest      extends DomainResource
{

   static def : string = 'GuidanceRequest';
   module : Reference ;
   dateTime : string ;
   evaluateAtDateTime : string ;
   inputParameters : Reference ;
   initiatingOrganization : Reference ;
   initiatingPerson : Reference ;
   userType : CodeableConcept ;
   userLanguage : CodeableConcept ;
   userTaskContext : CodeableConcept ;
   receivingOrganization : Reference ;
   receivingPerson : Reference ;
   recipientType : CodeableConcept ;
   recipientLanguage : CodeableConcept ;
   encounterClass : CodeableConcept ;
   encounterType : CodeableConcept ;
}
