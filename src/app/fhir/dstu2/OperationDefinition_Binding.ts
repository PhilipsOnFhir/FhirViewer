import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class OperationDefinition_Binding      extends BackboneElement
{

   static def : string = 'OperationDefinition_Binding';
   strength : string ;
   valueSetUri : string ;
   valueSetReference : Reference ;
}
