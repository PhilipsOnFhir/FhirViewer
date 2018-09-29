import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Provenance_RelatedAgent } from './Provenance_RelatedAgent'
import { Reference } from './Reference'

export class Provenance_Agent      extends BackboneElement
{

   static def : string = 'Provenance_Agent';
   role : Coding ;
   actor : Reference ;
   userId : Identifier ;
   relatedAgent : Provenance_RelatedAgent [];
}
