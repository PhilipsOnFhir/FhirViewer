import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class TestScript_Variable      extends BackboneElement
{

   static def : string = 'TestScript_Variable';
   name : string ;
   headerField : string ;
   path : string ;
   sourceId : string ;
}
