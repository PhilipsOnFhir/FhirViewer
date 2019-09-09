import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class DocumentReference_Related      extends BackboneElement
{

   static def : string = 'DocumentReference_Related';
   identifier : Identifier ;
   ref : Reference ;
}
