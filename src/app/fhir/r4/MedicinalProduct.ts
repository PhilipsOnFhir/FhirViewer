import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicinalProduct_ManufacturingBusinessOperation } from './MedicinalProduct_ManufacturingBusinessOperation'
import { MedicinalProduct_Name } from './MedicinalProduct_Name'
import { Reference } from './Reference'

export class MedicinalProduct      extends DomainResource
{

   static def : string = 'MedicinalProduct';
   identifier : Identifier ;
   type : CodeableConcept ;
   combinedPharmaceuticalDoseForm : CodeableConcept ;
   additionalMonitoringIndicator : CodeableConcept ;
   specialMeasures : string [];
   paediatricUseIndicator : CodeableConcept ;
   orphanDesignationStatus : CodeableConcept ;
   productClassification : CodeableConcept [];
   marketingAuthorization : Reference ;
   packagedMedicinalProduct : Reference [];
   pharmaceuticalProduct : Reference [];
   clinicalParticulars : Reference [];
   attachedDocument : Reference [];
   masterFile : Reference [];
   name : MedicinalProduct_Name [];
   crossReference : Identifier [];
   manufacturingBusinessOperation : MedicinalProduct_ManufacturingBusinessOperation [];
}
