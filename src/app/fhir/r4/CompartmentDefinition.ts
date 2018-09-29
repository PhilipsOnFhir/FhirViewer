import { CodeableConcept } from './CodeableConcept'
import { CompartmentDefinition_Resource } from './CompartmentDefinition_Resource'
import { CompartmentTypeEnum } from './CompartmentTypeEnum'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { UsageContext } from './UsageContext'

export class CompartmentDefinition      extends DomainResource
{

   static def : string = 'CompartmentDefinition';
   url : string ;
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
   code : CompartmentTypeEnum ;
   search : string ;
   resource : CompartmentDefinition_Resource [];
}
