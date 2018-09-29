import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MedicinalProductClinicals_OtherTherapy      extends BackboneElement
{

   static def : string = 'MedicinalProductClinicals_OtherTherapy';
   therapyRelationshipType : CodeableConcept ;
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
}
