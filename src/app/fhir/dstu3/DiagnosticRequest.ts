import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DiagnosticRequest_Requester } from './DiagnosticRequest_Requester'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { Timing } from './Timing'

export class DiagnosticRequest      extends DomainResource
{

   static def : string = 'DiagnosticRequest';
   identifier : Identifier [];
   definition : Reference [];
   basedOn : Reference [];
   replaces : Reference [];
   requisition : Identifier ;
   status : string ;
   intent : string ;
   priority : string ;
   code : CodeableConcept ;
   subject : Reference ;
   context : Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   occurrenceTiming : Timing ;
   authoredOn : string ;
   requester : DiagnosticRequest_Requester ;
   performerType : CodeableConcept ;
   performer : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   supportingInfo : Reference [];
   specimen : Reference [];
   bodySIte : CodeableConcept ;
   note : Annotation [];
   relevantHistory : Reference [];
}
