import { BackboneElement } from './BackboneElement'
import { ChargeItemDefinition_Applicability } from './ChargeItemDefinition_Applicability'
import { ChargeItemDefinition_PriceComponent } from './ChargeItemDefinition_PriceComponent'
import { DomainResource } from './DomainResource'

export class ChargeItemDefinition_PropertyGroup      extends BackboneElement
{

   static def : string = 'ChargeItemDefinition_PropertyGroup';
   applicability : ChargeItemDefinition_Applicability [];
   priceComponent : ChargeItemDefinition_PriceComponent [];
}
