import { Account } from './Account'
import { AllergyIntolerance } from './AllergyIntolerance'
import { Appointment } from './Appointment'
import { AppointmentResponse } from './AppointmentResponse'
import { AuditEvent } from './AuditEvent'
import { Basic } from './Basic'
import { Binary } from './Binary'
import { BodySite } from './BodySite'
import { Bundle } from './Bundle'
import { CarePlan } from './CarePlan'
import { Claim } from './Claim'
import { ClaimResponse } from './ClaimResponse'
import { ClinicalImpression } from './ClinicalImpression'
import { Communication } from './Communication'
import { CommunicationRequest } from './CommunicationRequest'
import { Composition } from './Composition'
import { ConceptMap } from './ConceptMap'
import { Condition } from './Condition'
import { Conformance } from './Conformance'
import { Contract } from './Contract'
import { Coverage } from './Coverage'
import { DataElement } from './DataElement'
import { DetectedIssue } from './DetectedIssue'
import { Device } from './Device'
import { DeviceComponent } from './DeviceComponent'
import { DeviceMetric } from './DeviceMetric'
import { DeviceUseRequest } from './DeviceUseRequest'
import { DeviceUseStatement } from './DeviceUseStatement'
import { DiagnosticOrder } from './DiagnosticOrder'
import { DiagnosticReport } from './DiagnosticReport'
import { DocumentManifest } from './DocumentManifest'
import { DocumentReference } from './DocumentReference'
import { DomainResource } from './DomainResource'
import { EligibilityRequest } from './EligibilityRequest'
import { EligibilityResponse } from './EligibilityResponse'
import { Encounter } from './Encounter'
import { EnrollmentRequest } from './EnrollmentRequest'
import { EnrollmentResponse } from './EnrollmentResponse'
import { EpisodeOfCare } from './EpisodeOfCare'
import { ExplanationOfBenefit } from './ExplanationOfBenefit'
import { FamilyMemberHistory } from './FamilyMemberHistory'
import { Flag } from './Flag'
import { Goal } from './Goal'
import { Group } from './Group'
import { HealthcareService } from './HealthcareService'
import { ImagingObjectSelection } from './ImagingObjectSelection'
import { ImagingStudy } from './ImagingStudy'
import { Immunization } from './Immunization'
import { ImmunizationRecommendation } from './ImmunizationRecommendation'
import { ImplementationGuide } from './ImplementationGuide'
import { List } from './List'
import { Location } from './Location'
import { Media } from './Media'
import { Medication } from './Medication'
import { MedicationAdministration } from './MedicationAdministration'
import { MedicationDispense } from './MedicationDispense'
import { MedicationOrder } from './MedicationOrder'
import { MedicationStatement } from './MedicationStatement'
import { MessageHeader } from './MessageHeader'
import { NamingSystem } from './NamingSystem'
import { NutritionOrder } from './NutritionOrder'
import { Observation } from './Observation'
import { OperationDefinition } from './OperationDefinition'
import { OperationOutcome } from './OperationOutcome'
import { Order } from './Order'
import { OrderResponse } from './OrderResponse'
import { Organization } from './Organization'
import { Parameters } from './Parameters'
import { Patient } from './Patient'
import { PaymentNotice } from './PaymentNotice'
import { PaymentReconciliation } from './PaymentReconciliation'
import { Person } from './Person'
import { Practitioner } from './Practitioner'
import { Procedure } from './Procedure'
import { ProcedureRequest } from './ProcedureRequest'
import { ProcessRequest } from './ProcessRequest'
import { ProcessResponse } from './ProcessResponse'
import { Provenance } from './Provenance'
import { Questionnaire } from './Questionnaire'
import { QuestionnaireResponse } from './QuestionnaireResponse'
import { ReferralRequest } from './ReferralRequest'
import { RelatedPerson } from './RelatedPerson'
import { RiskAssessment } from './RiskAssessment'
import { Schedule } from './Schedule'
import { SearchParameter } from './SearchParameter'
import { Slot } from './Slot'
import { Specimen } from './Specimen'
import { StructureDefinition } from './StructureDefinition'
import { Subscription } from './Subscription'
import { Substance } from './Substance'
import { SupplyDelivery } from './SupplyDelivery'
import { SupplyRequest } from './SupplyRequest'
import { TestScript } from './TestScript'
import { ValueSet } from './ValueSet'
import { VisionPrescription } from './VisionPrescription'

export class ResourceContainer{

   static def : string = 'ResourceContainer';
   Account : Account ;
   AllergyIntolerance : AllergyIntolerance ;
   Appointment : Appointment ;
   AppointmentResponse : AppointmentResponse ;
   AuditEvent : AuditEvent ;
   Basic : Basic ;
   Binary : Binary ;
   BodySite : BodySite ;
   Bundle : Bundle ;
   CarePlan : CarePlan ;
   Claim : Claim ;
   ClaimResponse : ClaimResponse ;
   ClinicalImpression : ClinicalImpression ;
   Communication : Communication ;
   CommunicationRequest : CommunicationRequest ;
   Composition : Composition ;
   ConceptMap : ConceptMap ;
   Condition : Condition ;
   Conformance : Conformance ;
   Contract : Contract ;
   Coverage : Coverage ;
   DataElement : DataElement ;
   DetectedIssue : DetectedIssue ;
   Device : Device ;
   DeviceComponent : DeviceComponent ;
   DeviceMetric : DeviceMetric ;
   DeviceUseRequest : DeviceUseRequest ;
   DeviceUseStatement : DeviceUseStatement ;
   DiagnosticOrder : DiagnosticOrder ;
   DiagnosticReport : DiagnosticReport ;
   DocumentManifest : DocumentManifest ;
   DocumentReference : DocumentReference ;
   EligibilityRequest : EligibilityRequest ;
   EligibilityResponse : EligibilityResponse ;
   Encounter : Encounter ;
   EnrollmentRequest : EnrollmentRequest ;
   EnrollmentResponse : EnrollmentResponse ;
   EpisodeOfCare : EpisodeOfCare ;
   ExplanationOfBenefit : ExplanationOfBenefit ;
   FamilyMemberHistory : FamilyMemberHistory ;
   Flag : Flag ;
   Goal : Goal ;
   Group : Group ;
   HealthcareService : HealthcareService ;
   ImagingObjectSelection : ImagingObjectSelection ;
   ImagingStudy : ImagingStudy ;
   Immunization : Immunization ;
   ImmunizationRecommendation : ImmunizationRecommendation ;
   ImplementationGuide : ImplementationGuide ;
   List : List ;
   Location : Location ;
   Media : Media ;
   Medication : Medication ;
   MedicationAdministration : MedicationAdministration ;
   MedicationDispense : MedicationDispense ;
   MedicationOrder : MedicationOrder ;
   MedicationStatement : MedicationStatement ;
   MessageHeader : MessageHeader ;
   NamingSystem : NamingSystem ;
   NutritionOrder : NutritionOrder ;
   Observation : Observation ;
   OperationDefinition : OperationDefinition ;
   OperationOutcome : OperationOutcome ;
   Order : Order ;
   OrderResponse : OrderResponse ;
   Organization : Organization ;
   Patient : Patient ;
   PaymentNotice : PaymentNotice ;
   PaymentReconciliation : PaymentReconciliation ;
   Person : Person ;
   Practitioner : Practitioner ;
   Procedure : Procedure ;
   ProcedureRequest : ProcedureRequest ;
   ProcessRequest : ProcessRequest ;
   ProcessResponse : ProcessResponse ;
   Provenance : Provenance ;
   Questionnaire : Questionnaire ;
   QuestionnaireResponse : QuestionnaireResponse ;
   ReferralRequest : ReferralRequest ;
   RelatedPerson : RelatedPerson ;
   RiskAssessment : RiskAssessment ;
   Schedule : Schedule ;
   SearchParameter : SearchParameter ;
   Slot : Slot ;
   Specimen : Specimen ;
   StructureDefinition : StructureDefinition ;
   Subscription : Subscription ;
   Substance : Substance ;
   SupplyDelivery : SupplyDelivery ;
   SupplyRequest : SupplyRequest ;
   TestScript : TestScript ;
   ValueSet : ValueSet ;
   VisionPrescription : VisionPrescription ;
   Parameters : Parameters ;
}
