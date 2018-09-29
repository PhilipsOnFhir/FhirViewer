import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class EnrollmentRequest      extends DomainResource
{

   static def : string = 'EnrollmentRequest';
   identifier : Identifier [];
   ruleset : Coding ;
   originalRuleset : Coding ;
   created : string ;
   target : Reference ;
   provider : Reference ;
   organization : Reference ;
   subject : Reference ;
   coverage : Reference ;
   relationship : Coding ;
}
