import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class Attachment      extends Element
{

   static def : string = 'Attachment';
   contentType : string ;
   language : string ;
   data : string ;
   url : string ;
   size : string ;
   hash : string ;
   title : string ;
   creation : string ;
}
