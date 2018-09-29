import { DomainResource } from './DomainResource'
import { SearchParameter_Contact } from './SearchParameter_Contact'
import { XPathUsageTypeEnum } from './XPathUsageTypeEnum'

export class SearchParameter      extends DomainResource
{

   static def : string = 'SearchParameter';
   url : string ;
   name : string ;
   status : string ;
   experimental : string ;
   publisher : string ;
   contact : SearchParameter_Contact [];
   date : string ;
   requirements : string ;
   code : string ;
   base : string ;
   type : string ;
   description : string ;
   xpath : string ;
   xpathUsage : XPathUsageTypeEnum ;
   target : string [];
}
