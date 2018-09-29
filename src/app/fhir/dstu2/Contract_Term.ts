import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Contract_Actor1 } from './Contract_Actor1'
import { Contract_ValuedItem1 } from './Contract_ValuedItem1'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Contract_Term      extends BackboneElement
{

   static def : string = 'Contract_Term';
   identifier : Identifier ;
   issued : string ;
   applies : Period ;
   type : CodeableConcept ;
   subType : CodeableConcept ;
   subject : Reference ;
   action : CodeableConcept [];
   actionReason : CodeableConcept [];
   actor : Contract_Actor1 [];
   text : string ;
   valuedItem : Contract_ValuedItem1 [];
   group : Contract_Term [];
}
