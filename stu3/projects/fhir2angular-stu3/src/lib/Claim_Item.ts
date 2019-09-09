import { Address } from './Address'
import { BackboneElement } from './BackboneElement'
import { Claim_Detail } from './Claim_Detail'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class Claim_Item      extends BackboneElement
{

   static def : string = 'Claim_Item';
   sequence : string ;
   careTeamLinkId : string [];
   diagnosisLinkId : string [];
   procedureLinkId : string [];
   informationLinkId : string [];
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
   unitPrice : string ;
   factor : string ;
   net : string ;
   udi : Reference [];
   bodySite : CodeableConcept ;
   subSite : CodeableConcept [];
   encounter : Reference [];
   detail : Claim_Detail [];
}
