import { AddressTypeEnum } from './AddressTypeEnum'
import { AddressUseEnum } from './AddressUseEnum'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Period } from './Period'

export class Address      extends Element
{

   static def : string = 'Address';
   use : AddressUseEnum ;
   type : AddressTypeEnum ;
   text : string ;
   line : string [];
   city : string ;
   district : string ;
   state : string ;
   postalCode : string ;
   country : string ;
   period : Period ;
}
