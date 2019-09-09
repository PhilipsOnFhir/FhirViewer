import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { OperationDefinition_Overload } from './OperationDefinition_Overload'
import { OperationDefinition_Parameter } from './OperationDefinition_Parameter'
import { OperationKindEnum } from './OperationKindEnum'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'
import { ResourceTypeEnum } from './ResourceTypeEnum'
import { UsageContext } from './UsageContext'

export class OperationDefinition      extends DomainResource
{

   static def : string = 'OperationDefinition';
   url : string ;
   version : string ;
   name : string ;
   status : PublicationStatusEnum ;
   kind : OperationKindEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   purpose : string ;
   idempotent : boolean ;
   code : string ;
   comment : string ;
   base : Reference ;
   resource : ResourceTypeEnum [];
   system : boolean ;
   type : boolean ;
   instance : boolean ;
   parameter : OperationDefinition_Parameter [];
   overload : OperationDefinition_Overload [];
}
