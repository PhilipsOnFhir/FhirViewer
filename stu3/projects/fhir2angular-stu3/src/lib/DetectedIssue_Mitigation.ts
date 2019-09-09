import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class DetectedIssue_Mitigation      extends BackboneElement
{

   static def : string = 'DetectedIssue_Mitigation';
   action : CodeableConcept ;
   date : string ;
   author : Reference ;
}
