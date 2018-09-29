import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class ProcessResponse_Notes      extends BackboneElement
{

   static def : string = 'ProcessResponse_Notes';
   type : Coding ;
   text : string ;
}
