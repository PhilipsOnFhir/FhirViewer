import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class MedicinalProductDeviceSpec_Material      extends BackboneElement
{

   static def : string = 'MedicinalProductDeviceSpec_Material';
   substance : CodeableConcept ;
   alternate : string ;
   allergenicIndicator : string ;
}
