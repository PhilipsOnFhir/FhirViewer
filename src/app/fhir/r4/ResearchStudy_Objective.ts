import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ResearchStudy_Objective      extends BackboneElement
{

   static def : string = 'ResearchStudy_Objective';
   name : string ;
   type : CodeableConcept ;
}
