import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class ContactDetail      extends Element
{

   static def : string = 'ContactDetail';
   name : string ;
   telecom : ContactPoint [];
}
