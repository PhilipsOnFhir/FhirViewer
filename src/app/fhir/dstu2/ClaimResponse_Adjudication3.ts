import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Money } from './Money'

export class ClaimResponse_Adjudication3      extends BackboneElement
{

   static def : string = 'ClaimResponse_Adjudication3';
   code : Coding ;
   amount : Money ;
   value : string ;
}
