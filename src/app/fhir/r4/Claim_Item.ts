import { Address } from './Address'
import { BackboneElement } from './BackboneElement'
import { Claim_Detail } from './Claim_Detail'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Money } from './Money'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class Claim_Item      extends BackboneElement
{

   static def : string = 'Claim_Item';
   sequence : string ;
   careTeamSequence : string [];
   diagnosisSequence : string [];
   procedureSequence : string [];
   informationSequence : string [];
   revenue : CodeableConcept ;
   category : CodeableConcept ;
   service : CodeableConcept ;
   modifier : CodeableConcept [];
   programCode : CodeableConcept [];
   servicedDate : string ;
   servicedPeriod : Period ;
   locationCodeableConcept : CodeableConcept ;
   locationAddress : Address ;
   locationReference : Reference ;
   quantity : Quantity ;
   unitPrice : Money ;
   factor : string ;
   net : Money ;
   udi : Reference [];
   bodySite : CodeableConcept ;
   subSite : CodeableConcept [];
   encounter : Reference [];
   detail : Claim_Detail [];
}
