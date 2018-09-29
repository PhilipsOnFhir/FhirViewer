import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class MedicinalProduct_CountryLanguage      extends BackboneElement
{

   static def : string = 'MedicinalProduct_CountryLanguage';
   country : CodeableConcept ;
   jurisdiction : CodeableConcept ;
   language : CodeableConcept ;
}
