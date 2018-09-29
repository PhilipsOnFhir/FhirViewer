import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class ClaimResponse_Note      extends BackboneElement
{

   static def : string = 'ClaimResponse_Note';
   number : string ;
   type : Coding ;
   text : string ;
}
