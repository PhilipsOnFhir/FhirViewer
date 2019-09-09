import { DomainResource } from './DomainResource'
import { Meta } from './Meta'

export class Resource{

   static def : string = 'Resource';
   id : string ;
   meta : Meta ;
   implicitRules : string ;
   language : string ;
   resourceType : string ;
}
