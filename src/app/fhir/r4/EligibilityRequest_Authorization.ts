import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { EligibilityRequest_Diagnosis } from './EligibilityRequest_Diagnosis'
import { Money } from './Money'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class EligibilityRequest_Authorization      extends BackboneElement
{

   static def : string = 'EligibilityRequest_Authorization';
   sequence : string ;
   service : CodeableConcept ;
   modifier : CodeableConcept [];
   quantity : Quantity ;
   unitPrice : Money ;
   facility : Reference ;
   diagnosis : EligibilityRequest_Diagnosis [];
}
