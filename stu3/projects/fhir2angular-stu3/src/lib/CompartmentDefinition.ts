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
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   purpose : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   code : CompartmentTypeEnum ;
   search : boolean ;
   resource : CompartmentDefinition_Resource [];
}
