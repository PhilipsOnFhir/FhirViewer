import { DomainResource } from './DomainResource'
import { ModuleMetadata } from './ModuleMetadata'
import { Reference } from './Reference'

export class OrderSet      extends DomainResource
{

   static def : string = 'OrderSet';
   moduleMetadata : ModuleMetadata ;
   library : Reference [];
   action : string [];
}
