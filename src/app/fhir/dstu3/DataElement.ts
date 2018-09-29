import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DataElementStringencyEnum } from './DataElementStringencyEnum'
import { DataElement_Mapping } from './DataElement_Mapping'
import { DomainResource } from './DomainResource'
import { ElementDefinition } from './ElementDefinition'
import { Identifier } from './Identifier'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { UsageContext } from './UsageContext'

export class DataElement      extends DomainResource
{

   static def : string = 'DataElement';
   url : string ;
   identifier : Identifier [];
   version : string ;
   status : PublicationStatusEnum ;
   experimental : string ;
   date : string ;
   publisher : string ;
   name : string ;
   title : string ;
   contact : ContactDetail [];
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   copyright : string ;
   stringency : DataElementStringencyEnum ;
   mapping : DataElement_Mapping [];
   element : ElementDefinition [];
}
