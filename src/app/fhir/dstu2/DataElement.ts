import { CodeableConcept } from './CodeableConcept'
import { DataElementStringencyEnum } from './DataElementStringencyEnum'
import { DataElement_Contact } from './DataElement_Contact'
import { DataElement_Mapping } from './DataElement_Mapping'
import { DomainResource } from './DomainResource'
import { ElementDefinition } from './ElementDefinition'
import { Identifier } from './Identifier'

export class DataElement      extends DomainResource
{

   static def : string = 'DataElement';
   url : string ;
   identifier : Identifier [];
   version : string ;
   name : string ;
   status : string ;
   experimental : string ;
   publisher : string ;
   contact : DataElement_Contact [];
   date : string ;
   useContext : CodeableConcept [];
   copyright : string ;
   stringency : DataElementStringencyEnum ;
   mapping : DataElement_Mapping [];
   element : ElementDefinition [];
}
