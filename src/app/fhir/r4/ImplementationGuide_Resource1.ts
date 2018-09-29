import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ImplementationGuide_Resource1      extends BackboneElement
{

   static def : string = 'ImplementationGuide_Resource1';
   reference : Reference ;
   exampleBoolean : string ;
   exampleCanonical : string ;
   relativePath : string ;
}
