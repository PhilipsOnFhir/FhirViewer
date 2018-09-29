import { CodeableConcept } from './CodeableConcept'
import { Coverage_Grouping } from './Coverage_Grouping'
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
   relationship : CodeableConcept ;
   period : Period ;
   payor : Reference [];
   grouping : Coverage_Grouping ;
   dependent : string ;
   sequence : string ;
   order : string ;
   network : string ;
   contract : Reference [];
}
