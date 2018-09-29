import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class MedicinalProductAuthorization_JurisdictionalAuthorization      extends BackboneElement
{

   static def : string = 'MedicinalProductAuthorization_JurisdictionalAuthorization';
   country : CodeableConcept ;
   jurisdiction : CodeableConcept ;
   number : Identifier ;
   legalStatusOfSupply : CodeableConcept ;
}
