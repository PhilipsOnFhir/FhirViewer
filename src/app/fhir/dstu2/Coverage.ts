import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Coverage      extends DomainResource
{

   static def : string = 'Coverage';
   issuer : Reference ;
   bin : Identifier ;
   period : Period ;
   type : Coding ;
   subscriberId : Identifier ;
   identifier : Identifier [];
   group : string ;
   plan : string ;
   subPlan : string ;
   dependent : string ;
   sequence : string ;
   subscriber : Reference ;
   network : Identifier ;
   contract : Reference [];
}
