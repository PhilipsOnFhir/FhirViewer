import { Attachment } from './Attachment'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { RelatedArtifactTypeEnum } from './RelatedArtifactTypeEnum'

export class RelatedArtifact      extends Element
{

   static def : string = 'RelatedArtifact';
   type : RelatedArtifactTypeEnum ;
   display : string ;
   citation : string ;
   url : string ;
   document : Attachment ;
   resource : string ;
}
