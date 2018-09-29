import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ImplementationGuide_Resource      extends BackboneElement
{

   static def : string = 'ImplementationGuide_Resource';
   reference : Reference ;
   name : string ;
   description : string ;
   exampleBoolean : string ;
   exampleCanonical : string ;
   package : string ;
}
