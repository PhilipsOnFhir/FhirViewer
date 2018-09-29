import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { ImagingStudy_Instance } from './ImagingStudy_Instance'
import { InstanceAvailabilityEnum } from './InstanceAvailabilityEnum'

export class ImagingStudy_Series      extends BackboneElement
{

   static def : string = 'ImagingStudy_Series';
   number : string ;
   modality : Coding ;
   uid : string ;
   description : string ;
   numberOfInstances : string ;
   availability : InstanceAvailabilityEnum ;
   url : string ;
   bodySite : Coding ;
   laterality : Coding ;
   started : string ;
   instance : ImagingStudy_Instance [];
}
