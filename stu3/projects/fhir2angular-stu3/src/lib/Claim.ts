import { Claim_Accident } from './Claim_Accident'
import { Claim_CareTeam } from './Claim_CareTeam'
import { Claim_Diagnosis } from './Claim_Diagnosis'
import { Claim_Information } from './Claim_Information'
import { Claim_Insurance } from './Claim_Insurance'
import { Claim_Item } from './Claim_Item'
import { Claim_Payee } from './Claim_Payee'
import { Claim_Procedure } from './Claim_Procedure'
import { Claim_Related } from './Claim_Related'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { UseEnum } from './UseEnum'

export class Claim      extends DomainResource
{

   static def : string = 'Claim';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   type : CodeableConcept ;
   subType : CodeableConcept [];
   use : UseEnum ;
   patient : Reference ;
   billablePeriod : Period ;
   created : string ;
   enterer : Reference ;
   insurer : Reference ;
   provider : Reference ;
   organization : Reference ;
   priority : CodeableConcept ;
   fundsReserve : CodeableConcept ;
   related : Claim_Related [];
   prescription : Reference ;
   originalPrescription : Reference ;
   payee : Claim_Payee ;
   referral : Reference ;
   facility : Reference ;
   careTeam : Claim_CareTeam [];
   information : Claim_Information [];
   diagnosis : Claim_Diagnosis [];
   procedure : Claim_Procedure [];
   insurance : Claim_Insurance [];
   accident : Claim_Accident ;
   employmentImpacted : Period ;
   hospitalization : Period ;
   item : Claim_Item [];
   total : string ;
}
