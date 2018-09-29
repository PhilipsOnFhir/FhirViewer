import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { DiagnosticReportStatusEnum } from './DiagnosticReportStatusEnum'
import { DiagnosticReport_Media } from './DiagnosticReport_Media'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class DiagnosticReport      extends DomainResource
{

   static def : string = 'DiagnosticReport';
   identifier : Identifier [];
   basedOn : Reference [];
   status : DiagnosticReportStatusEnum ;
   category : CodeableConcept ;
   code : CodeableConcept ;
   subject : Reference ;
   context : Reference ;
   effectiveDateTime : string ;
   effectivePeriod : Period ;
   issued : string ;
   performer : Reference [];
   resultsInterpreter : Reference [];
   specimen : Reference [];
   result : Reference [];
   imagingStudy : Reference [];
   media : DiagnosticReport_Media [];
   conclusion : string ;
   codedDiagnosis : CodeableConcept [];
   presentedForm : Attachment [];
}
