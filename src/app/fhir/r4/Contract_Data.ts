import { BackboneElement } from './BackboneElement'
import { ContractDataMeaningEnum } from './ContractDataMeaningEnum'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Contract_Data      extends BackboneElement
{

   static def : string = 'Contract_Data';
   meaning : ContractDataMeaningEnum ;
   reference : Reference ;
}
