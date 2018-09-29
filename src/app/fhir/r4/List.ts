import { Annotation } from './Annotation'
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
   status : ListStatusEnum ;
   mode : ListModeEnum ;
   title : string ;
   code : CodeableConcept ;
   subject : Reference ;
   encounter : Reference ;
   date : string ;
   source : Reference ;
   orderedBy : CodeableConcept ;
   note : Annotation [];
   entry : List_Entry [];
   emptyReason : CodeableConcept ;
}
