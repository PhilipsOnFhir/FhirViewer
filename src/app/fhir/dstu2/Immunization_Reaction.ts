import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Immunization_Reaction      extends BackboneElement
{

   static def : string = 'Immunization_Reaction';
   date : string ;
   detail : Reference ;
   reported : string ;
}
