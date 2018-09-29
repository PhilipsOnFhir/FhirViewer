import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Extension } from './Extension'

export class BackboneElement      extends Element
{

   static def : string = 'BackboneElement';
   modifierExtension : Extension [];
}
