import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { ImplementationGuide_Dependency } from './ImplementationGuide_Dependency'
import { ImplementationGuide_Global } from './ImplementationGuide_Global'
import { ImplementationGuide_Package } from './ImplementationGuide_Package'
import { ImplementationGuide_Page } from './ImplementationGuide_Page'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { UsageContext } from './UsageContext'

export class ImplementationGuide      extends DomainResource
{

   static def : string = 'ImplementationGuide';
   url : string ;
   version : string ;
   name : string ;
   status : PublicationStatusEnum ;
   experimental : string ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   copyright : string ;
   fhirVersion : string ;
   dependency : ImplementationGuide_Dependency [];
   package : ImplementationGuide_Package [];
   global : ImplementationGuide_Global [];
   binary : string [];
   page : ImplementationGuide_Page ;
}
