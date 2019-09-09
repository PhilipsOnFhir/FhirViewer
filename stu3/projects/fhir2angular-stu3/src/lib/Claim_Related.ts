import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Claim_Related      extends BackboneElement
{

   static def : string = 'Claim_Related';
   claim : Reference ;
   relationship : CodeableConcept ;
   reference : Identifier ;
}
