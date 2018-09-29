import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { NameUseEnum } from './NameUseEnum'
import { Period } from './Period'

export class HumanName      extends Element
{

   static def : string = 'HumanName';
   use : NameUseEnum ;
   text : string ;
   family : string [];
   given : string [];
   prefix : string [];
   suffix : string [];
   period : Period ;
}
