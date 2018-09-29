import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ProdCharacteristic } from './ProdCharacteristic'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class MedicinalProductPackaged_ManufacturedItem      extends BackboneElement
{

   static def : string = 'MedicinalProductPackaged_ManufacturedItem';
   manufacturedDoseForm : CodeableConcept ;
   unitOfPresentation : CodeableConcept ;
   quantity : Quantity ;
   xManufacturer : Reference [];
   ingredient : Reference [];
   physicalCharacteristics : ProdCharacteristic ;
}
