import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { DiagnosticReportStatusEnum } from './DiagnosticReportStatusEnum'
import { DiagnosticReport_Image } from './DiagnosticReport_Image'
import { DiagnosticReport_Performer } from './DiagnosticReport_Performer'
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
   performer : DiagnosticReport_Performer [];
   specimen : Reference [];
   result : Reference [];
   imagingStudy : Reference [];
   image : DiagnosticReport_Image [];
   conclusion : string ;
   codedDiagnosis : CodeableConcept [];
   presentedForm : Attachment [];
}
