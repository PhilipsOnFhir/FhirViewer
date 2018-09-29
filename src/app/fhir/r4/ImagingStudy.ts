import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ImagingStudyStatusEnum } from './ImagingStudyStatusEnum'
import { ImagingStudy_Series } from './ImagingStudy_Series'
import { Reference } from './Reference'

export class ImagingStudy      extends DomainResource
{

   static def : string = 'ImagingStudy';
   identifier : Identifier [];
   status : ImagingStudyStatusEnum ;
   modality : Coding [];
   subject : Reference ;
   context : Reference ;
   started : string ;
   basedOn : Reference [];
   referrer : Reference ;
   interpreter : Reference [];
   endpoint : Reference [];
   numberOfSeries : string ;
   numberOfInstances : string ;
   procedureReference : Reference ;
   procedureCode : CodeableConcept [];
   location : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   note : Annotation [];
   series : ImagingStudy_Series [];
}
