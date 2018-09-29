import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class ActivityDefinition_DynamicValue      extends BackboneElement
{

   static def : string = 'ActivityDefinition_DynamicValue';
   description : string ;
   path : string ;
   language : string ;
   expression : string ;
}
