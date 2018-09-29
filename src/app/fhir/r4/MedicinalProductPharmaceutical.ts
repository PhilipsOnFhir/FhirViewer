import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicinalProductPharmaceutical_Characteristics } from './MedicinalProductPharmaceutical_Characteristics'
import { Reference } from './Reference'

export class MedicinalProductPharmaceutical      extends DomainResource
{

   static def : string = 'MedicinalProductPharmaceutical';
   identifier : Identifier [];
   administrableDoseForm : CodeableConcept ;
   unitOfPresentation : CodeableConcept ;
   routeOfAdministration : CodeableConcept [];
   ingredient : Reference [];
   device : string [];
   characteristics : MedicinalProductPharmaceutical_Characteristics [];
}
