import { BackboneElement } from './BackboneElement'
import { ClaimResponse_Adjudication4 } from './ClaimResponse_Adjudication4'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Money } from './Money'

export class ClaimResponse_Detail1      extends BackboneElement
{

   static def : string = 'ClaimResponse_Detail1';
   service : Coding ;
   fee : Money ;
   adjudication : ClaimResponse_Adjudication4 [];
}
