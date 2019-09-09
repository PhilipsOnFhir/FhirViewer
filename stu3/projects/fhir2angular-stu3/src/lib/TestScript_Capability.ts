import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class TestScript_Capability      extends BackboneElement
{

   static def : string = 'TestScript_Capability';
   required : boolean ;
   validated : boolean ;
   description : string ;
   origin : string [];
   destination : string ;
   link : string [];
   capabilities : Reference ;
}
