import { ActionListEnum } from './ActionListEnum'
import { DomainResource } from './DomainResource'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { ProcessRequest_Item } from './ProcessRequest_Item'
import { Reference } from './Reference'

export class ProcessRequest      extends DomainResource
{

   static def : string = 'ProcessRequest';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   action : ActionListEnum ;
   target : Reference ;
   created : string ;
   provider : Reference ;
   request : Reference ;
   response : Reference ;
   nullify : string ;
   reference : string ;
   item : ProcessRequest_Item [];
   include : string [];
   exclude : string [];
   period : Period ;
}
