import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { EntryDefinitionRelationTypeEnum } from './EntryDefinitionRelationTypeEnum'
import { Reference } from './Reference'

export class EntryDefinition_RelatedEntry      extends BackboneElement
{

   static def : string = 'EntryDefinition_RelatedEntry';
   relationtype : EntryDefinitionRelationTypeEnum ;
   item : Reference ;
}
