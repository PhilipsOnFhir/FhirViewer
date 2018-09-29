import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicinalProductAuthorization_Application } from './MedicinalProductAuthorization_Application'
import { Period } from './Period'

export class MedicinalProductAuthorization_Procedure      extends BackboneElement
{

   static def : string = 'MedicinalProductAuthorization_Procedure';
   number : Identifier ;
   type : CodeableConcept ;
   date : Period ;
   application : MedicinalProductAuthorization_Application [];
}
