import { Address } from './Address'
import { Annotation } from './Annotation'
import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ContactDetail } from './ContactDetail'
import { ContactPoint } from './ContactPoint'
import { Contributor } from './Contributor'
import { DataRequirement } from './DataRequirement'
import { DomainResource } from './DomainResource'
import { Dosage } from './Dosage'
import { Element } from './Element'
import { ElementDefinition_Base } from './ElementDefinition_Base'
import { ElementDefinition_Binding } from './ElementDefinition_Binding'
import { ElementDefinition_Constraint } from './ElementDefinition_Constraint'
import { ElementDefinition_Example } from './ElementDefinition_Example'
import { ElementDefinition_Mapping } from './ElementDefinition_Mapping'
import { ElementDefinition_Slicing } from './ElementDefinition_Slicing'
import { ElementDefinition_Type } from './ElementDefinition_Type'
import { HumanName } from './HumanName'
import { Identifier } from './Identifier'
import { Money } from './Money'
import { ParameterDefinition } from './ParameterDefinition'
import { Period } from './Period'
import { PropertyRepresentationEnum } from './PropertyRepresentationEnum'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Ratio } from './Ratio'
import { Reference } from './Reference'
import { RelatedArtifact } from './RelatedArtifact'
import { SampledData } from './SampledData'
import { Signature } from './Signature'
import { Timing } from './Timing'
import { TriggerDefinition } from './TriggerDefinition'
import { UsageContext } from './UsageContext'

export class ElementDefinition      extends Element
{

   static def : string = 'ElementDefinition';
   path : string ;
   representation : PropertyRepresentationEnum [];
   sliceName : string ;
   label : string ;
   code : Coding [];
   slicing : ElementDefinition_Slicing ;
   short : string ;
   definition : string ;
   comment : string ;
   requirements : string ;
   alias : string [];
   min : string ;
   max : string ;
   base : ElementDefinition_Base ;
   contentReference : string ;
   type : ElementDefinition_Type [];
   defaultValueBase64Binary : string ;
   defaultValueBoolean : string ;
   defaultValueCanonical : string ;
   defaultValueCode : string ;
   defaultValueDate : string ;
   defaultValueDateTime : string ;
   defaultValueDecimal : string ;
   defaultValueId : string ;
   defaultValueInstant : string ;
   defaultValueInteger : string ;
   defaultValueMarkdown : string ;
   defaultValueOid : string ;
   defaultValuePositiveInt : string ;
   defaultValueString : string ;
   defaultValueTime : string ;
   defaultValueUnsignedInt : string ;
   defaultValueUri : string ;
   defaultValueUrl : string ;
   defaultValueUuid : string ;
   defaultValueAddress : Address ;
   defaultValueAge : string ;
   defaultValueAnnotation : Annotation ;
   defaultValueAttachment : Attachment ;
   defaultValueCodeableConcept : CodeableConcept ;
   defaultValueCoding : Coding ;
   defaultValueContactPoint : ContactPoint ;
   defaultValueCount : string ;
   defaultValueDistance : string ;
   defaultValueDuration : string ;
   defaultValueHumanName : HumanName ;
   defaultValueIdentifier : Identifier ;
   defaultValueMoney : Money ;
   defaultValuePeriod : Period ;
   defaultValueQuantity : Quantity ;
   defaultValueRange : Range ;
   defaultValueRatio : Ratio ;
   defaultValueReference : Reference ;
   defaultValueSampledData : SampledData ;
   defaultValueSignature : Signature ;
   defaultValueTiming : Timing ;
   defaultValueParameterDefinition : ParameterDefinition ;
   defaultValueDataRequirement : DataRequirement ;
   defaultValueRelatedArtifact : RelatedArtifact ;
   defaultValueContactDetail : ContactDetail ;
   defaultValueContributor : Contributor ;
   defaultValueTriggerDefinition : TriggerDefinition ;
   defaultValueUsageContext : UsageContext ;
   defaultValueDosage : Dosage ;
   meaningWhenMissing : string ;
   orderMeaning : string ;
   fixedBase64Binary : string ;
   fixedBoolean : string ;
   fixedCanonical : string ;
   fixedCode : string ;
   fixedDate : string ;
   fixedDateTime : string ;
   fixedDecimal : string ;
   fixedId : string ;
   fixedInstant : string ;
   fixedInteger : string ;
   fixedMarkdown : string ;
   fixedOid : string ;
   fixedPositiveInt : string ;
   fixedString : string ;
   fixedTime : string ;
   fixedUnsignedInt : string ;
   fixedUri : string ;
   fixedUrl : string ;
   fixedUuid : string ;
   fixedAddress : Address ;
   fixedAge : string ;
   fixedAnnotation : Annotation ;
   fixedAttachment : Attachment ;
   fixedCodeableConcept : CodeableConcept ;
   fixedCoding : Coding ;
   fixedContactPoint : ContactPoint ;
   fixedCount : string ;
   fixedDistance : string ;
   fixedDuration : string ;
   fixedHumanName : HumanName ;
   fixedIdentifier : Identifier ;
   fixedMoney : Money ;
   fixedPeriod : Period ;
   fixedQuantity : Quantity ;
   fixedRange : Range ;
   fixedRatio : Ratio ;
   fixedReference : Reference ;
   fixedSampledData : SampledData ;
   fixedSignature : Signature ;
   fixedTiming : Timing ;
   fixedParameterDefinition : ParameterDefinition ;
   fixedDataRequirement : DataRequirement ;
   fixedRelatedArtifact : RelatedArtifact ;
   fixedContactDetail : ContactDetail ;
   fixedContributor : Contributor ;
   fixedTriggerDefinition : TriggerDefinition ;
   fixedUsageContext : UsageContext ;
   fixedDosage : Dosage ;
   patternBase64Binary : string ;
   patternBoolean : string ;
   patternCanonical : string ;
   patternCode : string ;
   patternDate : string ;
   patternDateTime : string ;
   patternDecimal : string ;
   patternId : string ;
   patternInstant : string ;
   patternInteger : string ;
   patternMarkdown : string ;
   patternOid : string ;
   patternPositiveInt : string ;
   patternString : string ;
   patternTime : string ;
   patternUnsignedInt : string ;
   patternUri : string ;
   patternUrl : string ;
   patternUuid : string ;
   patternAddress : Address ;
   patternAge : string ;
   patternAnnotation : Annotation ;
   patternAttachment : Attachment ;
   patternCodeableConcept : CodeableConcept ;
   patternCoding : Coding ;
   patternContactPoint : ContactPoint ;
   patternCount : string ;
   patternDistance : string ;
   patternDuration : string ;
   patternHumanName : HumanName ;
   patternIdentifier : Identifier ;
   patternMoney : Money ;
   patternPeriod : Period ;
   patternQuantity : Quantity ;
   patternRange : Range ;
   patternRatio : Ratio ;
   patternReference : Reference ;
   patternSampledData : SampledData ;
   patternSignature : Signature ;
   patternTiming : Timing ;
   patternParameterDefinition : ParameterDefinition ;
   patternDataRequirement : DataRequirement ;
   patternRelatedArtifact : RelatedArtifact ;
   patternContactDetail : ContactDetail ;
   patternContributor : Contributor ;
   patternTriggerDefinition : TriggerDefinition ;
   patternUsageContext : UsageContext ;
   patternDosage : Dosage ;
   example : ElementDefinition_Example [];
   minValueDate : string ;
   minValueDateTime : string ;
   minValueInstant : string ;
   minValueTime : string ;
   minValueDecimal : string ;
   minValueInteger : string ;
   minValuePositiveInt : string ;
   minValueUnsignedInt : string ;
   minValueQuantity : Quantity ;
   maxValueDate : string ;
   maxValueDateTime : string ;
   maxValueInstant : string ;
   maxValueTime : string ;
   maxValueDecimal : string ;
   maxValueInteger : string ;
   maxValuePositiveInt : string ;
   maxValueUnsignedInt : string ;
   maxValueQuantity : Quantity ;
   maxLength : string ;
   condition : string [];
   constraint : ElementDefinition_Constraint [];
   mustSupport : string ;
   isModifier : string ;
   isModifierReason : string ;
   isSummary : string ;
   binding : ElementDefinition_Binding ;
   mapping : ElementDefinition_Mapping [];
}
