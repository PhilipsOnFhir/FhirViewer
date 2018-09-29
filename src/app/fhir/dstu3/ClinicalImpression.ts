import { Annotation } from './Annotation'
import { ClinicalImpressionStatusEnum } from './ClinicalImpressionStatusEnum'
import { ClinicalImpression_Finding } from './ClinicalImpression_Finding'
import { ClinicalImpression_Investigation } from './ClinicalImpression_Investigation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class ClinicalImpression      extends DomainResource
{

   static def : string = 'ClinicalImpression';
   identifier : Identifier [];
   status : ClinicalImpressionStatusEnum ;
   code : CodeableConcept ;
   description : string ;
   subject : Reference ;
   context : Reference ;
   effectiveDateTime : string ;
   effectivePeriod : Period ;
   date : string ;
   assessor : Reference ;
   previous : Reference ;
   problem : Reference [];
   investigation : ClinicalImpression_Investigation [];
   protocol : string [];
   summary : string ;
   finding : ClinicalImpression_Finding [];
   prognosisCodeableConcept : CodeableConcept [];
   prognosisReference : Reference [];
   action : Reference [];
   note : Annotation [];
}
