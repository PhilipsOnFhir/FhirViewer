import { ClaimProcessingCodesEnum } from './ClaimProcessingCodesEnum'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ExplanationOfBenefitStatusEnum } from './ExplanationOfBenefitStatusEnum'
import { ExplanationOfBenefit_Accident } from './ExplanationOfBenefit_Accident'
import { ExplanationOfBenefit_AddItem } from './ExplanationOfBenefit_AddItem'
import { ExplanationOfBenefit_BenefitBalance } from './ExplanationOfBenefit_BenefitBalance'
import { ExplanationOfBenefit_CareTeam } from './ExplanationOfBenefit_CareTeam'
import { ExplanationOfBenefit_Diagnosis } from './ExplanationOfBenefit_Diagnosis'
import { ExplanationOfBenefit_Information } from './ExplanationOfBenefit_Information'
import { ExplanationOfBenefit_Insurance } from './ExplanationOfBenefit_Insurance'
import { ExplanationOfBenefit_Item } from './ExplanationOfBenefit_Item'
import { ExplanationOfBenefit_Payee } from './ExplanationOfBenefit_Payee'
import { ExplanationOfBenefit_Payment } from './ExplanationOfBenefit_Payment'
import { ExplanationOfBenefit_Procedure } from './ExplanationOfBenefit_Procedure'
import { ExplanationOfBenefit_ProcessNote } from './ExplanationOfBenefit_ProcessNote'
import { ExplanationOfBenefit_Related } from './ExplanationOfBenefit_Related'
import { ExplanationOfBenefit_Total } from './ExplanationOfBenefit_Total'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { UseEnum } from './UseEnum'

export class ExplanationOfBenefit      extends DomainResource
{

   static def : string = 'ExplanationOfBenefit';
   identifier : Identifier [];
   status : ExplanationOfBenefitStatusEnum ;
   type : CodeableConcept ;
   subType : CodeableConcept [];
   use : UseEnum ;
   patient : Reference ;
   billablePeriod : Period ;
   created : string ;
   enterer : Reference ;
   insurer : Reference ;
   provider : Reference ;
   referral : Reference ;
   facility : Reference ;
   claim : Reference ;
   claimResponse : Reference ;
   outcome : ClaimProcessingCodesEnum ;
   disposition : string ;
   related : ExplanationOfBenefit_Related [];
   prescription : Reference ;
   originalPrescription : Reference ;
   payee : ExplanationOfBenefit_Payee ;
   information : ExplanationOfBenefit_Information [];
   careTeam : ExplanationOfBenefit_CareTeam [];
   diagnosis : ExplanationOfBenefit_Diagnosis [];
   procedure : ExplanationOfBenefit_Procedure [];
   precedence : string ;
   insurance : ExplanationOfBenefit_Insurance ;
   accident : ExplanationOfBenefit_Accident ;
   item : ExplanationOfBenefit_Item [];
   addItem : ExplanationOfBenefit_AddItem [];
   total : ExplanationOfBenefit_Total [];
   payment : ExplanationOfBenefit_Payment ;
   form : CodeableConcept ;
   processNote : ExplanationOfBenefit_ProcessNote [];
   benefitBalance : ExplanationOfBenefit_BenefitBalance [];
}
