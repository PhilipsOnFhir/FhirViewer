import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Reference } from './Reference'
import { SupplyDispenseStatusEnum } from './SupplyDispenseStatusEnum'

export class Supply_Dispense      extends BackboneElement
{

   static def : string = 'Supply_Dispense';
   identifier : Identifier ;
   status : SupplyDispenseStatusEnum ;
   type : CodeableConcept ;
   quantity : Quantity ;
   suppliedItem : Reference ;
   supplier : Reference ;
   whenPrepared : Period ;
   whenHandedOver : string ;
   destination : Reference ;
   receiver : Reference [];
}
