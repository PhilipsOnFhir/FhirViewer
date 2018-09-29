import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ProcessResponse_Notes } from './ProcessResponse_Notes'
import { Reference } from './Reference'

export class ProcessResponse      extends DomainResource
{

   static def : string = 'ProcessResponse';
   identifier : Identifier [];
   request : Reference ;
   outcome : Coding ;
   disposition : string ;
   ruleset : Coding ;
   originalRuleset : Coding ;
   created : string ;
   organization : Reference ;
   requestProvider : Reference ;
   requestOrganization : Reference ;
   form : Coding ;
   notes : ProcessResponse_Notes [];
   error : Coding [];
}
