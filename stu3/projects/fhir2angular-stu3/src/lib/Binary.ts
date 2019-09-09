import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { Resource } from './Resource'

export class Binary      extends Resource
{

   static def : string = 'Binary';
   contentType : string ;
   securityContext : Reference ;
   content : string ;
}
