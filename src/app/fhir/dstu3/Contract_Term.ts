import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { Contract_Agent1 } from './Contract_Agent1'
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
   topic : Reference [];
   action : CodeableConcept [];
   actionReason : CodeableConcept [];
   securityLabel : Coding [];
   agent : Contract_Agent1 [];
   text : string ;
   valuedItem : Contract_ValuedItem1 [];
   group : Contract_Term [];
}
