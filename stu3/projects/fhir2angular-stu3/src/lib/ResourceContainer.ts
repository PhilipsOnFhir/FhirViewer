import { Account } from './Account'
import { ActivityDefinition } from './ActivityDefinition'
import { AdverseEvent } from './AdverseEvent'
import { AllergyIntolerance } from './AllergyIntolerance'
import { Appointment } from './Appointment'
import { AppointmentResponse } from './AppointmentResponse'
import { AuditEvent } from './AuditEvent'
import { Basic } from './Basic'
import { Binary } from './Binary'
import { BodySite } from './BodySite'
import { Bundle } from './Bundle'
import { CapabilityStatement } from './CapabilityStatement'
import { CarePlan } from './CarePlan'
import { CareTeam } from './CareTeam'
import { ChargeItem } from './ChargeItem'
import { Claim } from './Claim'
import { ClaimResponse } from './ClaimResponse'
import { ClinicalImpression } from './ClinicalImpression'
import { CodeSystem } from './CodeSystem'
import { Communication } from './Communication'
import { CommunicationRequest } from './CommunicationRequest'
import { CompartmentDefinition } from './CompartmentDefinition'
import { Composition } from './Composition'
import { ConceptMap } from './ConceptMap'
import { Condition } from './Condition'
import { Consent } from './Consent'
import { Contract } from './Contract'
import { Coverage } from './Coverage'
import { DataElement } from './DataElement'
import { DetectedIssue } from './DetectedIssue'
import { Device } from './Device'
import { DeviceComponent } from './DeviceComponent'
import { DeviceMetric } from './DeviceMetric'
import { DeviceRequest } from './DeviceRequest'
import { DeviceUseStatement } from './DeviceUseStatement'
import { DiagnosticReport } from './DiagnosticReport'
import { DocumentManifest } from './DocumentManifest'
import { DocumentReference } from './DocumentReference'
import { DomainResource } from './DomainResource'
import { EligibilityRequest } from './EligibilityRequest'
import { EligibilityResponse } from './EligibilityResponse'
import { Encounter } from './Encounter'
import { Endpoint } from './Endpoint'
import { EnrollmentRequest } from './EnrollmentRequest'
import { EnrollmentResponse } from './EnrollmentResponse'
import { EpisodeOfCare } from './EpisodeOfCare'
import { ExpansionProfile } from './ExpansionProfile'
import { ExplanationOfBenefit } from './ExplanationOfBenefit'
import { FamilyMemberHistory } from './FamilyMemberHistory'
import { Flag } from './Flag'
import { Goal } from './Goal'
import { GraphDefinition } from './GraphDefinition'
import { Group } from './Group'
import { GuidanceResponse } from './GuidanceResponse'
import { HealthcareService } from './HealthcareService'
import { ImagingManifest } from './ImagingManifest'
import { ImagingStudy } from './ImagingStudy'
import { Immunization } from './Immunization'
import { ImmunizationRecommendation } from './ImmunizationRecommendation'
import { ImplementationGuide } from './ImplementationGuide'
import { Library } from './Library'
import { Linkage } from './Linkage'
import { List } from './List'
import { Location } from './Location'
import { Measure } from './Measure'
import { MeasureReport } from './MeasureReport'
import { Media } from './Media'
import { Medication } from './Medication'
import { MedicationAdministration } from './MedicationAdministration'
import { MedicationDispense } from './MedicationDispense'
import { MedicationRequest } from './MedicationRequest'
import { MedicationStatement } from './MedicationStatement'
import { MessageDefinition } from './MessageDefinition'
import { MessageHeader } from './MessageHeader'
import { NamingSystem } from './NamingSystem'
import { NutritionOrder } from './NutritionOrder'
import { Observation } from './Observation'
import { OperationDefinition } from './OperationDefinition'
import { OperationOutcome } from './OperationOutcome'
import { Organization } from './Organization'
import { Parameters } from './Parameters'
import { Patient } from './Patient'
import { PaymentNotice } from './PaymentNotice'
import { PaymentReconciliation } from './PaymentReconciliation'
import { Person } from './Person'
import { PlanDefinition } from './PlanDefinition'
import { Practitioner } from './Practitioner'
import { PractitionerRole } from './PractitionerRole'
import { Procedure } from './Procedure'
import { ProcedureRequest } from './ProcedureRequest'
import { ProcessRequest } from './ProcessRequest'
import { ProcessResponse } from './ProcessResponse'
import { Provenance } from './Provenance'
import { Questionnaire } from './Questionnaire'
import { QuestionnaireResponse } from './QuestionnaireResponse'
import { ReferralRequest } from './ReferralRequest'
import { RelatedPerson } from './RelatedPerson'
import { RequestGroup } from './RequestGroup'
import { ResearchStudy } from './ResearchStudy'
import { ResearchSubject } from './ResearchSubject'
import { RiskAssessment } from './RiskAssessment'
import { Schedule } from './Schedule'
import { SearchParameter } from './SearchParameter'
import { Sequence } from './Sequence'
import { ServiceDefinition } from './ServiceDefinition'
import { Slot } from './Slot'
import { Specimen } from './Specimen'
import { StructureDefinition } from './StructureDefinition'
import { StructureMap } from './StructureMap'
import { Subscription } from './Subscription'
import { Substance } from './Substance'
import { SupplyDelivery } from './SupplyDelivery'
import { SupplyRequest } from './SupplyRequest'
import { Task } from './Task'
import { TestReport } from './TestReport'
import { TestScript } from './TestScript'
import { ValueSet } from './ValueSet'
import { VisionPrescription } from './VisionPrescription'

export class ResourceContainer{

   static def : string = 'ResourceContainer';
   Account : Account ;
   ActivityDefinition : ActivityDefinition ;
   AdverseEvent : AdverseEvent ;
   AllergyIntolerance : AllergyIntolerance ;
   Appointment : Appointment ;
   AppointmentResponse : AppointmentResponse ;
   AuditEvent : AuditEvent ;
   Basic : Basic ;
   Binary : Binary ;
   BodySite : BodySite ;
   Bundle : Bundle ;
   CapabilityStatement : CapabilityStatement ;
   CarePlan : CarePlan ;
   CareTeam : CareTeam ;
   ChargeItem : ChargeItem ;
   Claim : Claim ;
   ClaimResponse : ClaimResponse ;
   ClinicalImpression : ClinicalImpression ;
   CodeSystem : CodeSystem ;
   Communication : Communication ;
   CommunicationRequest : CommunicationRequest ;
   CompartmentDefinition : CompartmentDefinition ;
   Composition : Composition ;
   ConceptMap : ConceptMap ;
   Condition : Condition ;
   Consent : Consent ;
   Contract : Contract ;
   Coverage : Coverage ;
   DataElement : DataElement ;
   DetectedIssue : DetectedIssue ;
   Device : Device ;
   DeviceComponent : DeviceComponent ;
   DeviceMetric : DeviceMetric ;
   DeviceRequest : DeviceRequest ;
   DeviceUseStatement : DeviceUseStatement ;
   DiagnosticReport : DiagnosticReport ;
   DocumentManifest : DocumentManifest ;
   DocumentReference : DocumentReference ;
   EligibilityRequest : EligibilityRequest ;
   EligibilityResponse : EligibilityResponse ;
   Encounter : Encounter ;
   Endpoint : Endpoint ;
   EnrollmentRequest : EnrollmentRequest ;
   EnrollmentResponse : EnrollmentResponse ;
   EpisodeOfCare : EpisodeOfCare ;
   ExpansionProfile : ExpansionProfile ;
   ExplanationOfBenefit : ExplanationOfBenefit ;
   FamilyMemberHistory : FamilyMemberHistory ;
   Flag : Flag ;
   Goal : Goal ;
   GraphDefinition : GraphDefinition ;
   Group : Group ;
   GuidanceResponse : GuidanceResponse ;
   HealthcareService : HealthcareService ;
   ImagingManifest : ImagingManifest ;
   ImagingStudy : ImagingStudy ;
   Immunization : Immunization ;
   ImmunizationRecommendation : ImmunizationRecommendation ;
   ImplementationGuide : ImplementationGuide ;
   Library : Library ;
   Linkage : Linkage ;
   List : List ;
   Location : Location ;
   Measure : Measure ;
   MeasureReport : MeasureReport ;
   Media : Media ;
   Medication : Medication ;
   MedicationAdministration : MedicationAdministration ;
   MedicationDispense : MedicationDispense ;
   MedicationRequest : MedicationRequest ;
   MedicationStatement : MedicationStatement ;
   MessageDefinition : MessageDefinition ;
   MessageHeader : MessageHeader ;
   NamingSystem : NamingSystem ;
   NutritionOrder : NutritionOrder ;
   Observation : Observation ;
   OperationDefinition : OperationDefinition ;
   OperationOutcome : OperationOutcome ;
   Organization : Organization ;
   Patient : Patient ;
   PaymentNotice : PaymentNotice ;
   PaymentReconciliation : PaymentReconciliation ;
   Person : Person ;
   PlanDefinition : PlanDefinition ;
   Practitioner : Practitioner ;
   PractitionerRole : PractitionerRole ;
   Procedure : Procedure ;
   ProcedureRequest : ProcedureRequest ;
   ProcessRequest : ProcessRequest ;
   ProcessResponse : ProcessResponse ;
   Provenance : Provenance ;
   Questionnaire : Questionnaire ;
   QuestionnaireResponse : QuestionnaireResponse ;
   ReferralRequest : ReferralRequest ;
   RelatedPerson : RelatedPerson ;
   RequestGroup : RequestGroup ;
   ResearchStudy : ResearchStudy ;
   ResearchSubject : ResearchSubject ;
   RiskAssessment : RiskAssessment ;
   Schedule : Schedule ;
   SearchParameter : SearchParameter ;
   Sequence : Sequence ;
   ServiceDefinition : ServiceDefinition ;
   Slot : Slot ;
   Specimen : Specimen ;
   StructureDefinition : StructureDefinition ;
   StructureMap : StructureMap ;
   Subscription : Subscription ;
   Substance : Substance ;
   SupplyDelivery : SupplyDelivery ;
   SupplyRequest : SupplyRequest ;
   Task : Task ;
   TestReport : TestReport ;
   TestScript : TestScript ;
   ValueSet : ValueSet ;
   VisionPrescription : VisionPrescription ;
   Parameters : Parameters ;
}
