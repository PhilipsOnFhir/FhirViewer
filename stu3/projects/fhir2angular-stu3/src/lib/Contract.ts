import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ContractResourceStatusCodesEnum } from './ContractResourceStatusCodesEnum'
import { Contract_Agent } from './Contract_Agent'
import { Contract_Friendly } from './Contract_Friendly'
import { Contract_Legal } from './Contract_Legal'
import { Contract_Rule } from './Contract_Rule'
import { Contract_Signer } from './Contract_Signer'
import { Contract_Term } from './Contract_Term'
import { Contract_ValuedItem } from './Contract_ValuedItem'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Contract      extends DomainResource
{

   static def : string = 'Contract';
   identifier : Identifier ;
   status : ContractResourceStatusCodesEnum ;
   issued : string ;
   applies : Period ;
   subject : Reference [];
   topic : Reference [];
   authority : Reference [];
   domain : Reference [];
   type : CodeableConcept ;
   subType : CodeableConcept [];
   action : CodeableConcept [];
   actionReason : CodeableConcept [];
   decisionType : CodeableConcept ;
   contentDerivative : CodeableConcept ;
   securityLabel : Coding [];
   agent : Contract_Agent [];
   signer : Contract_Signer [];
   valuedItem : Contract_ValuedItem [];
   term : Contract_Term [];
   bindingAttachment : Attachment ;
   bindingReference : Reference ;
   friendly : Contract_Friendly [];
   legal : Contract_Legal [];
   rule : Contract_Rule [];
}
