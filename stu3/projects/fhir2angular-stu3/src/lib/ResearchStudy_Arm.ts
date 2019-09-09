import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ResearchStudy_Arm      extends BackboneElement
{

   static def : string = 'ResearchStudy_Arm';
   name : string ;
   code : CodeableConcept ;
   description : string ;
}
