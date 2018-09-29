import { ActionListEnum } from './ActionListEnum'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { ProcessRequest_Item } from './ProcessRequest_Item'
import { Reference } from './Reference'

export class ProcessRequest      extends DomainResource
{

   static def : string = 'ProcessRequest';
   action : ActionListEnum ;
   identifier : Identifier [];
   ruleset : Coding ;
   originalRuleset : Coding ;
   created : string ;
   target : Reference ;
   provider : Reference ;
   organization : Reference ;
   request : Reference ;
   response : Reference ;
   nullify : string ;
   reference : string ;
   item : ProcessRequest_Item [];
   include : string [];
   exclude : string [];
   period : Period ;
}
