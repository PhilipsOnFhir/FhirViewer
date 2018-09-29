import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MarketingStatus } from './MarketingStatus'
import { MedicinalProductPackaged_BatchIdentifier } from './MedicinalProductPackaged_BatchIdentifier'
import { MedicinalProductPackaged_PackageItem } from './MedicinalProductPackaged_PackageItem'

export class MedicinalProductPackaged      extends DomainResource
{

   static def : string = 'MedicinalProductPackaged';
   identifier : Identifier ;
   description : string ;
   marketingStatus : MarketingStatus [];
   batchIdentifier : MedicinalProductPackaged_BatchIdentifier [];
   packageItem : MedicinalProductPackaged_PackageItem [];
}
