import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { ExpansionProfile_Designation } from './ExpansionProfile_Designation'
import { ExpansionProfile_ExcludedSystem } from './ExpansionProfile_ExcludedSystem'
import { ExpansionProfile_FixedVersion } from './ExpansionProfile_FixedVersion'
import { Identifier } from './Identifier'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { UsageContext } from './UsageContext'

export class ExpansionProfile      extends DomainResource
{

   static def : string = 'ExpansionProfile';
   url : string ;
   identifier : Identifier ;
   version : string ;
   name : string ;
   status : PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   fixedVersion : ExpansionProfile_FixedVersion [];
   excludedSystem : ExpansionProfile_ExcludedSystem ;
   includeDesignations : boolean ;
   designation : ExpansionProfile_Designation ;
   includeDefinition : boolean ;
   activeOnly : boolean ;
   excludeNested : boolean ;
   excludeNotForUI : boolean ;
   excludePostCoordinated : boolean ;
   displayLanguage : string ;
   limitedExpansion : boolean ;
}
