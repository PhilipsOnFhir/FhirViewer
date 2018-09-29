import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ImagingStudy_Series } from './ImagingStudy_Series'
import { InstanceAvailabilityEnum } from './InstanceAvailabilityEnum'
import { Reference } from './Reference'

export class ImagingStudy      extends DomainResource
{

   static def : string = 'ImagingStudy';
   uid : string ;
   accession : Identifier ;
   identifier : Identifier [];
   availability : InstanceAvailabilityEnum ;
   modalityList : Coding [];
   patient : Reference ;
   context : Reference ;
   started : string ;
   basedOn : Reference [];
   referrer : Reference ;
   interpreter : Reference [];
   endpoint : Reference [];
   numberOfSeries : string ;
   numberOfInstances : string ;
   procedureReference : Reference [];
   procedureCode : CodeableConcept [];
   reason : CodeableConcept ;
   description : string ;
   series : ImagingStudy_Series [];
}
