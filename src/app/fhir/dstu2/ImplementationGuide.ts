import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ImplementationGuide_Contact } from './ImplementationGuide_Contact'
import { ImplementationGuide_Dependency } from './ImplementationGuide_Dependency'
import { ImplementationGuide_Global } from './ImplementationGuide_Global'
import { ImplementationGuide_Package } from './ImplementationGuide_Package'
import { ImplementationGuide_Page } from './ImplementationGuide_Page'

export class ImplementationGuide      extends DomainResource
{

   static def : string = 'ImplementationGuide';
   url : string ;
   version : string ;
   name : string ;
   status : string ;
   experimental : string ;
   publisher : string ;
   contact : ImplementationGuide_Contact [];
   date : string ;
   description : string ;
   useContext : CodeableConcept [];
   copyright : string ;
   fhirVersion : string ;
   dependency : ImplementationGuide_Dependency [];
   package : ImplementationGuide_Package [];
   global : ImplementationGuide_Global [];
   binary : string [];
   page : ImplementationGuide_Page ;
}
