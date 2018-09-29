import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { ImplementationGuide_Definition } from './ImplementationGuide_Definition'
import { ImplementationGuide_DependsOn } from './ImplementationGuide_DependsOn'
import { ImplementationGuide_Global } from './ImplementationGuide_Global'
import { ImplementationGuide_Manifest } from './ImplementationGuide_Manifest'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { SPDXLicenseEnum } from './SPDXLicenseEnum'
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
   packageId : string ;
   license : SPDXLicenseEnum ;
   fhirVersion : string ;
   dependsOn : ImplementationGuide_DependsOn [];
   global : ImplementationGuide_Global [];
   definition : ImplementationGuide_Definition ;
   manifest : ImplementationGuide_Manifest ;
}
