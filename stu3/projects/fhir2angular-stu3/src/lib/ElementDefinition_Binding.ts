import { BindingStrengthEnum } from './BindingStrengthEnum'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Reference } from './Reference'

export class ElementDefinition_Binding      extends Element
{

   static def : string = 'ElementDefinition_Binding';
   strength : BindingStrengthEnum ;
   description : string ;
   valueSetUri : string ;
   valueSetReference : Reference ;
}
