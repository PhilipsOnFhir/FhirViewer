import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { IdentifierUseEnum } from './IdentifierUseEnum'
import { Period } from './Period'
import { Reference } from './Reference'

export class Identifier      extends Element
{

   static def : string = 'Identifier';
   use : IdentifierUseEnum ;
   type : CodeableConcept ;
   system : string ;
   value : string ;
   period : Period ;
   assigner : Reference ;
}
