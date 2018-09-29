import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class ExplanationOfBenefit      extends DomainResource
{

   static def : string = 'ExplanationOfBenefit';
   identifier : Identifier [];
   request : Reference ;
   outcome : string ;
   disposition : string ;
   ruleset : Coding ;
   originalRuleset : Coding ;
   created : string ;
   organization : Reference ;
   requestProvider : Reference ;
   requestOrganization : Reference ;
}
