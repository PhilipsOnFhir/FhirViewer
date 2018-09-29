import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Encounter_Hospitalization      extends BackboneElement
{

   static def : string = 'Encounter_Hospitalization';
   preAdmissionIdentifier : Identifier ;
   origin : Reference ;
   admitSource : CodeableConcept ;
   admittingDiagnosis : Reference [];
   reAdmission : CodeableConcept ;
   dietPreference : CodeableConcept [];
   specialCourtesy : CodeableConcept [];
   specialArrangement : CodeableConcept [];
   destination : Reference ;
   dischargeDisposition : CodeableConcept ;
   dischargeDiagnosis : Reference [];
}
