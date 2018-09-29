import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicinalProductPackaged_ManufacturedItem } from './MedicinalProductPackaged_ManufacturedItem'
import { ProdCharacteristic } from './ProdCharacteristic'
import { ProductShelfLife } from './ProductShelfLife'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class MedicinalProductPackaged_PackageItem      extends BackboneElement
{

   static def : string = 'MedicinalProductPackaged_PackageItem';
   identifier : Identifier [];
   type : CodeableConcept ;
   quantity : Quantity ;
   material : CodeableConcept [];
   alternateMaterial : CodeableConcept [];
   manufacturer : Reference [];
   device : Reference [];
   manufacturedItem : MedicinalProductPackaged_ManufacturedItem [];
   otherCharacteristics : CodeableConcept [];
   packageItem : MedicinalProductPackaged_PackageItem [];
   physicalCharacteristics : ProdCharacteristic ;
   shelfLifeStorage : ProductShelfLife [];
}
