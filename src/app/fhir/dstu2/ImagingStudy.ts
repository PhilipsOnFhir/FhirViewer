import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ImagingStudy_Series } from './ImagingStudy_Series'
import { InstanceAvailabilityEnum } from './InstanceAvailabilityEnum'
import { Reference } from './Reference'

export class ImagingStudy      extends DomainResource
{

   static def : string = 'ImagingStudy';
   started : string ;
   patient : Reference ;
   uid : string ;
   accession : Identifier ;
   identifier : Identifier [];
   order : Reference [];
   modalityList : Coding [];
   referrer : Reference ;
   availability : InstanceAvailabilityEnum ;
   url : string ;
   numberOfSeries : string ;
   numberOfInstances : string ;
   procedure : Reference [];
   interpreter : Reference ;
   description : string ;
   series : ImagingStudy_Series [];
}
