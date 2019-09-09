import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { PropertyTypeEnum } from './PropertyTypeEnum'

export class CodeSystem_Property      extends BackboneElement
{

   static def : string = 'CodeSystem_Property';
   code : string ;
   uri : string ;
   description : string ;
   type : PropertyTypeEnum ;
}
