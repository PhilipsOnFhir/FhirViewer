import { Extension } from './Extension'
import { Narrative } from './Narrative'
import { Resource } from './Resource'

export class DomainResource      extends Resource
{

   static def : string = 'DomainResource';
   text : Narrative ;
   contained : DomainResource [];
   extension : Extension [];
   modifierExtension : Extension [];
}
