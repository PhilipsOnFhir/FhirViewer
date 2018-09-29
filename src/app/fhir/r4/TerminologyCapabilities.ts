import { CodeSearchSupportEnum } from './CodeSearchSupportEnum'
import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { TerminologyCapabilities_Closure } from './TerminologyCapabilities_Closure'
import { TerminologyCapabilities_CodeSystem } from './TerminologyCapabilities_CodeSystem'
import { TerminologyCapabilities_Expansion } from './TerminologyCapabilities_Expansion'
import { TerminologyCapabilities_Translation } from './TerminologyCapabilities_Translation'
import { TerminologyCapabilities_ValidateCode } from './TerminologyCapabilities_ValidateCode'
import { UsageContext } from './UsageContext'

export class TerminologyCapabilities      extends DomainResource
{

   static def : string = 'TerminologyCapabilities';
   url : string ;
   version : string ;
   name : string ;
   title : string ;
   status : PublicationStatusEnum ;
   experimental : string ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   purpose : string ;
   copyright : string ;
   lockedDate : string ;
   codeSystem : TerminologyCapabilities_CodeSystem [];
   expansion : TerminologyCapabilities_Expansion ;
   codeSearch : CodeSearchSupportEnum ;
   validateCode : TerminologyCapabilities_ValidateCode ;
   translation : TerminologyCapabilities_Translation ;
   closure : TerminologyCapabilities_Closure ;
}
