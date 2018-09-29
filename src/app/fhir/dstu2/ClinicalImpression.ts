import { ClinicalImpressionStatusEnum } from './ClinicalImpressionStatusEnum'
import { ClinicalImpression_Finding } from './ClinicalImpression_Finding'
import { ClinicalImpression_Investigations } from './ClinicalImpression_Investigations'
import { ClinicalImpression_RuledOut } from './ClinicalImpression_RuledOut'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ClinicalImpression      extends DomainResource
{

   static def : string = 'ClinicalImpression';
   patient : Reference ;
   assessor : Reference ;
   status : ClinicalImpressionStatusEnum ;
   date : string ;
   description : string ;
   previous : Reference ;
   problem : Reference [];
   triggerCodeableConcept : CodeableConcept ;
   triggerReference : Reference ;
   investigations : ClinicalImpression_Investigations [];
   protocol : string ;
   summary : string ;
   finding : ClinicalImpression_Finding [];
   resolved : CodeableConcept [];
   ruledOut : ClinicalImpression_RuledOut [];
   prognosis : string ;
   plan : Reference [];
   action : Reference [];
}
