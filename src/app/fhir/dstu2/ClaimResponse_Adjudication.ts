import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Money } from './Money'

export class ClaimResponse_Adjudication      extends BackboneElement
{

   static def : string = 'ClaimResponse_Adjudication';
   code : Coding ;
   amount : Money ;
   value : string ;
}
