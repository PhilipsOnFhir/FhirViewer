import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Contract_Agent } from './Contract_Agent'
import { Contract_Asset } from './Contract_Asset'
import { Contract_Offer } from './Contract_Offer'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'

export class Contract_Term      extends BackboneElement
{

   static def : string = 'Contract_Term';
   identifier : Identifier ;
   issued : string ;
   applies : Period ;
   type : CodeableConcept ;
   subType : CodeableConcept ;
   offer : Contract_Offer ;
   asset : Contract_Asset [];
   agent : Contract_Agent [];
   action : CodeableConcept [];
   actionReason : CodeableConcept [];
   group : Contract_Term [];
}
