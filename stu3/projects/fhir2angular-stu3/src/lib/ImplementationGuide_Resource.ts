import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ImplementationGuide_Resource      extends BackboneElement
{

   static def : string = 'ImplementationGuide_Resource';
   example : boolean ;
   name : string ;
   description : string ;
   acronym : string ;
   sourceUri : string ;
   sourceReference : Reference ;
   exampleFor : Reference ;
}
