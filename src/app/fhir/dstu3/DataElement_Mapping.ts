import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class DataElement_Mapping      extends BackboneElement
{

   static def : string = 'DataElement_Mapping';
   identity : string ;
   uri : string ;
   name : string ;
   comment : string ;
}
