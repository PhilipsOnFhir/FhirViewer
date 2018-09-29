import { ChargeItemDefinition_Applicability } from './ChargeItemDefinition_Applicability'
import { ChargeItemDefinition_PropertyGroup } from './ChargeItemDefinition_PropertyGroup'
import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'
import { UsageContext } from './UsageContext'

export class ChargeItemDefinition      extends DomainResource
{

   static def : string = 'ChargeItemDefinition';
   url : string ;
   identifier : Identifier [];
   version : string ;
   title : string ;
   derivedFromUri : string [];
   partOf : string [];
   replaces : string [];
   status : PublicationStatusEnum ;
   experimental : string ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : Period ;
   code : CodeableConcept ;
   instance : Reference [];
   applicability : ChargeItemDefinition_Applicability [];
   propertyGroup : ChargeItemDefinition_PropertyGroup [];
}
