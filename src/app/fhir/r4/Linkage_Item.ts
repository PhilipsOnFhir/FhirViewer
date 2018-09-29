import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { LinkageTypeEnum } from './LinkageTypeEnum'
import { Reference } from './Reference'

export class Linkage_Item      extends BackboneElement
{

   static def : string = 'Linkage_Item';
   type : LinkageTypeEnum ;
   resource : Reference ;
}
