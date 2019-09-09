import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { RequestGroup_Action } from './RequestGroup_Action'
import { RequestIntentEnum } from './RequestIntentEnum'
import { RequestPriorityEnum } from './RequestPriorityEnum'
import { RequestStatusEnum } from './RequestStatusEnum'

export class RequestGroup      extends DomainResource
{

   static def : string = 'RequestGroup';
   identifier : Identifier [];
   definition : Reference [];
   basedOn : Reference [];
   replaces : Reference [];
   groupIdentifier : Identifier ;
   status : RequestStatusEnum ;
   intent : RequestIntentEnum ;
   priority : RequestPriorityEnum ;
   subject : Reference ;
   context : Reference ;
   authoredOn : string ;
   author : Reference ;
   reasonCodeableConcept : CodeableConcept ;
   reasonReference : Reference ;
   note : Annotation [];
   action : RequestGroup_Action [];
}
