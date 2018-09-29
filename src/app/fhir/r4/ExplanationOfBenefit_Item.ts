import { Address } from './Address'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ExplanationOfBenefit_Adjudication } from './ExplanationOfBenefit_Adjudication'
import { ExplanationOfBenefit_Detail } from './ExplanationOfBenefit_Detail'
import { Money } from './Money'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class ExplanationOfBenefit_Item      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Item';
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
   noteNumber : string [];
   adjudication : ExplanationOfBenefit_Adjudication [];
   detail : ExplanationOfBenefit_Detail [];
}
