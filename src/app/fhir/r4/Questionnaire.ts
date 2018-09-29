import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Questionnaire_Item } from './Questionnaire_Item'
import { ResourceTypeEnum } from './ResourceTypeEnum'
import { UsageContext } from './UsageContext'

export class Questionnaire      extends DomainResource
{

   static def : string = 'Questionnaire';
   url : string ;
   identifier : Identifier [];
   version : string ;
   name : string ;
   title : string ;
   derivedFrom : string [];
   status : PublicationStatusEnum ;
   experimental : string ;
   subjectType : ResourceTypeEnum [];
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   purpose : string ;
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : Period ;
   code : Coding [];
   item : Questionnaire_Item [];
}
