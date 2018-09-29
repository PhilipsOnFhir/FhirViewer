import { CodeableConcept } from './CodeableConcept'
import { Coverage_Class } from './Coverage_Class'
import { Coverage_Copay } from './Coverage_Copay'
import { DomainResource } from './DomainResource'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Coverage      extends DomainResource
{

   static def : string = 'Coverage';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   type : CodeableConcept ;
   policyHolder : Reference ;
   subscriber : Reference ;
   subscriberId : string ;
   beneficiary : Reference ;
   dependent : string ;
   relationship : CodeableConcept ;
   period : Period ;
   payor : Reference [];
   class : Coverage_Class [];
   order : string ;
   network : string ;
   copay : Coverage_Copay [];
   contract : Reference [];
}
