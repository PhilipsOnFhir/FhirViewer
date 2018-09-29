import { Catalog_Document } from './Catalog_Document'
import { Catalog_Entry } from './Catalog_Entry'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class Catalog      extends DomainResource
{

   static def : string = 'Catalog';
   identifier : Identifier ;
   document : Catalog_Document ;
   entry : Catalog_Entry [];
}
