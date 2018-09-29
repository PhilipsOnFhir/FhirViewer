import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { DiagnosticReportStatusEnum } from './DiagnosticReportStatusEnum'
import { DiagnosticReport_Image } from './DiagnosticReport_Image'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class DiagnosticReport      extends DomainResource
{

   static def : string = 'DiagnosticReport';
   identifier : Identifier [];
   status : DiagnosticReportStatusEnum ;
   category : CodeableConcept ;
   code : CodeableConcept ;
   subject : Reference ;
   encounter : Reference ;
   effectiveDateTime : string ;
   effectivePeriod : Period ;
   issued : string ;
   performer : Reference ;
   request : Reference [];
   specimen : Reference [];
   result : Reference [];
   imagingStudy : Reference [];
   image : DiagnosticReport_Image [];
   conclusion : string ;
   codedDiagnosis : CodeableConcept [];
   presentedForm : Attachment [];
}
