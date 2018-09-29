import { ClaimTypeEnum } from './ClaimTypeEnum'
import { Claim_Coverage } from './Claim_Coverage'
import { Claim_Diagnosis } from './Claim_Diagnosis'
import { Claim_Item } from './Claim_Item'
import { Claim_MissingTeeth } from './Claim_MissingTeeth'
import { Claim_Payee } from './Claim_Payee'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { UseEnum } from './UseEnum'

export class Claim      extends DomainResource
{

   static def : string = 'Claim';
   type : ClaimTypeEnum ;
   identifier : Identifier [];
   ruleset : Coding ;
   originalRuleset : Coding ;
   created : string ;
   target : Reference ;
   provider : Reference ;
   organization : Reference ;
   use : UseEnum ;
   priority : Coding ;
   fundsReserve : Coding ;
   enterer : Reference ;
   facility : Reference ;
   prescription : Reference ;
   originalPrescription : Reference ;
   payee : Claim_Payee ;
   referral : Reference ;
   diagnosis : Claim_Diagnosis [];
   condition : Coding [];
   patient : Reference ;
   coverage : Claim_Coverage [];
   exception : Coding [];
   school : string ;
   accident : string ;
   accidentType : Coding ;
   interventionException : Coding [];
   item : Claim_Item [];
   additionalMaterials : Coding [];
   missingTeeth : Claim_MissingTeeth [];
}
