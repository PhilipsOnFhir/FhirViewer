import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ImagingStudy_Instance } from './ImagingStudy_Instance'
import { ImagingStudy_Performer } from './ImagingStudy_Performer'
import { Reference } from './Reference'

export class ImagingStudy_Series      extends BackboneElement
{

   static def : string = 'ImagingStudy_Series';
   identifier : Identifier ;
   number : string ;
   modality : Coding ;
   description : string ;
   numberOfInstances : string ;
   endpoint : Reference [];
   bodySite : Coding ;
   laterality : Coding ;
   specimen : Reference [];
   started : string ;
   performer : ImagingStudy_Performer [];
   instance : ImagingStudy_Instance [];
}
