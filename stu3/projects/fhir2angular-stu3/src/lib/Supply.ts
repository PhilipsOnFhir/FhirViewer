import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { SupplyStatusEnum } from './SupplyStatusEnum'
import { Supply_Dispense } from './Supply_Dispense'

export class Supply      extends DomainResource
{

   static def : string = 'Supply';
   kind : CodeableConcept ;
   identifier : Identifier ;
   status : SupplyStatusEnum ;
   orderedItem : Reference ;
   patient : Reference ;
   dispense : Supply_Dispense [];
}
