import { BackboneElement } from './BackboneElement'
import { BindingStrengthEnum } from './BindingStrengthEnum'
import { DomainResource } from './DomainResource'

export class OperationDefinition_Binding      extends BackboneElement
{

   static def : string = 'OperationDefinition_Binding';
   strength : BindingStrengthEnum ;
   valueSet : string ;
}
