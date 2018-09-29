import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { ResourceTypeEnum } from './ResourceTypeEnum'
import { SearchComparatorEnum } from './SearchComparatorEnum'
import { SearchModifierCodeEnum } from './SearchModifierCodeEnum'
import { SearchParamTypeEnum } from './SearchParamTypeEnum'
import { SearchParameter_Component } from './SearchParameter_Component'
import { UsageContext } from './UsageContext'
import { XPathUsageTypeEnum } from './XPathUsageTypeEnum'

export class SearchParameter      extends DomainResource
{

   static def : string = 'SearchParameter';
   url : string ;
   version : string ;
   name : string ;
   status : PublicationStatusEnum ;
   experimental : string ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   purpose : string ;
   code : string ;
   base : ResourceTypeEnum [];
   type : SearchParamTypeEnum ;
   derivedFrom : string ;
   description : string ;
   expression : string ;
   xpath : string ;
   xpathUsage : XPathUsageTypeEnum ;
   target : ResourceTypeEnum [];
   comparator : SearchComparatorEnum [];
   modifier : SearchModifierCodeEnum [];
   chain : string [];
   component : SearchParameter_Component [];
}
