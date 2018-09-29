import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class TestScript_Fixture      extends BackboneElement
{

   static def : string = 'TestScript_Fixture';
   autocreate : string ;
   autodelete : string ;
   resource : Reference ;
}
