import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { ImagingStudy_Instance } from './ImagingStudy_Instance'
import { InstanceAvailabilityEnum } from './InstanceAvailabilityEnum'
import { Reference } from './Reference'

export class ImagingStudy_Series      extends BackboneElement
{

   static def : string = 'ImagingStudy_Series';
   uid : string ;
   number : string ;
   modality : Coding ;
   description : string ;
   numberOfInstances : string ;
   availability : InstanceAvailabilityEnum ;
   endpoint : Reference [];
   bodySite : Coding ;
   laterality : Coding ;
   started : string ;
   performer : Reference [];
   instance : ImagingStudy_Instance [];
}
