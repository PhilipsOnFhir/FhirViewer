import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class DocumentManifest_Related      extends BackboneElement
{

   static def : string = 'DocumentManifest_Related';
   identifier : Identifier ;
   ref : Reference ;
}
