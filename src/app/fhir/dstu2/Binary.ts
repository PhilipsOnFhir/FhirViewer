import { DomainResource } from './DomainResource'
import { Resource } from './Resource'

export class Binary      extends Resource
{

   static def : string = 'Binary';
   contentType : string ;
   content : string ;
}
