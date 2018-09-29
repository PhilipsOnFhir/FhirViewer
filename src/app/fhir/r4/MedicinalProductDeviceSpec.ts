import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicinalProductDeviceSpec_Material } from './MedicinalProductDeviceSpec_Material'
import { ProdCharacteristic } from './ProdCharacteristic'
import { ProductShelfLife } from './ProductShelfLife'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class MedicinalProductDeviceSpec      extends DomainResource
{

   static def : string = 'MedicinalProductDeviceSpec';
   identifier : Identifier ;
   type : CodeableConcept ;
   tradeName : string ;
   quantity : Quantity ;
   listingNumber : string ;
   modelNumber : string ;
   sterilityIndicator : CodeableConcept ;
   sterilisationRequirement : CodeableConcept ;
   usage : CodeableConcept ;
   nomenclature : CodeableConcept [];
   shelfLife : ProductShelfLife [];
   physicalCharacteristics : ProdCharacteristic ;
   otherCharacteristics : CodeableConcept [];
   batchIdentifier : Identifier [];
   manufacturer : Reference [];
   material : MedicinalProductDeviceSpec_Material [];
}
