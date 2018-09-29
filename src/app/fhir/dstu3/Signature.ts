import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Reference } from './Reference'

export class Signature      extends Element
{

   static def : string = 'Signature';
   type : Coding [];
   when : string ;
   whoUri : string ;
   whoReference : Reference ;
   onBehalfOfUri : string ;
   onBehalfOfReference : Reference ;
   contentType : string ;
   blob : string ;
}
