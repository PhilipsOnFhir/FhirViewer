import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class EligibilityRequest      extends DomainResource
{

   static def : string = 'EligibilityRequest';
   identifier : Identifier [];
   ruleset : Coding ;
   originalRuleset : Coding ;
   created : string ;
   target : Reference ;
   provider : Reference ;
   organization : Reference ;
}
