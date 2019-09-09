import { BackboneElement } from './BackboneElement'
import { Conformance_Endpoint } from './Conformance_Endpoint'
import { Conformance_Event } from './Conformance_Event'
import { DomainResource } from './DomainResource'

export class Conformance_Messaging      extends BackboneElement
{

   static def : string = 'Conformance_Messaging';
   endpoint : Conformance_Endpoint [];
   reliableCache : string ;
   documentation : string ;
   event : Conformance_Event [];
}
