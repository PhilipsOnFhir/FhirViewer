import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { ContractResourceStatusCodesEnum } from './ContractResourceStatusCodesEnum'
import { Contract_Friendly } from './Contract_Friendly'
import { Contract_Legal } from './Contract_Legal'
import { Contract_Rule } from './Contract_Rule'
import { Contract_Signer } from './Contract_Signer'
import { Contract_Term } from './Contract_Term'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Contract      extends DomainResource
{

   static def : string = 'Contract';
   identifier : Identifier [];
   status : ContractResourceStatusCodesEnum ;
   contentDerivative : CodeableConcept ;
   issued : string ;
   applies : Period ;
   subject : Reference [];
   authority : Reference [];
   domain : Reference [];
   type : CodeableConcept ;
   subType : CodeableConcept [];
   term : Contract_Term [];
   signer : Contract_Signer [];
   friendly : Contract_Friendly [];
   legal : Contract_Legal [];
   rule : Contract_Rule ;
   legallyBindingAttachment : Attachment ;
   legallyBindingReference : Reference ;
}
