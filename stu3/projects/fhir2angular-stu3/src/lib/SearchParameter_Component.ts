import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class SearchParameter_Component      extends BackboneElement
{

   static def : string = 'SearchParameter_Component';
   definition : Reference ;
   expression : string ;
}
