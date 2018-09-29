import { DomainResource } from './DomainResource'
import { Linkage_Item } from './Linkage_Item'
import { Reference } from './Reference'

export class Linkage      extends DomainResource
{

   static def : string = 'Linkage';
   active : string ;
   author : Reference ;
   item : Linkage_Item [];
}
