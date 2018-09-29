import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class MedicinalProduct_ManufacturingBusinessOperation      extends BackboneElement
{

   static def : string = 'MedicinalProduct_ManufacturingBusinessOperation';
   operationType : CodeableConcept ;
   authorisationReferenceNumber : Identifier ;
   effectiveDate : string ;
   confidentialityIndicator : CodeableConcept ;
   manufacturer : Reference [];
   regulator : Reference ;
}
