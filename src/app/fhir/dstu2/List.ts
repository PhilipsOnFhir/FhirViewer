import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ListModeEnum } from './ListModeEnum'
import { ListStatusEnum } from './ListStatusEnum'
import { List_Entry } from './List_Entry'
import { Reference } from './Reference'

export class List      extends DomainResource
{

   static def : string = 'List';
   identifier : Identifier [];
   title : string ;
   code : CodeableConcept ;
   subject : Reference ;
   source : Reference ;
   encounter : Reference ;
   status : ListStatusEnum ;
   date : string ;
   orderedBy : CodeableConcept ;
   mode : ListModeEnum ;
   note : string ;
   entry : List_Entry [];
   emptyReason : CodeableConcept ;
}
