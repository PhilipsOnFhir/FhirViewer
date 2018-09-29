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
   status : PublicationStatusEnum ;
   experimental : string ;
   date : string ;
   publisher : string ;
   description : string ;
   purpose : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : Period ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   contact : ContactDetail [];
   copyright : string ;
   code : Coding [];
   subjectType : ResourceTypeEnum [];
   item : Questionnaire_Item [];
}
