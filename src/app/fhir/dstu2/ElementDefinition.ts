import { Address } from './Address'
import { Annotation } from './Annotation'
import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { ElementDefinition_Base } from './ElementDefinition_Base'
import { ElementDefinition_Binding } from './ElementDefinition_Binding'
import { ElementDefinition_Constraint } from './ElementDefinition_Constraint'
import { ElementDefinition_Mapping } from './ElementDefinition_Mapping'
import { ElementDefinition_Slicing } from './ElementDefinition_Slicing'
import { ElementDefinition_Type } from './ElementDefinition_Type'
import { HumanName } from './HumanName'
import { Identifier } from './Identifier'
import { Meta } from './Meta'
import { Period } from './Period'
import { PropertyRepresentationEnum } from './PropertyRepresentationEnum'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Ratio } from './Ratio'
import { Reference } from './Reference'
import { SampledData } from './SampledData'
import { Signature } from './Signature'
import { Timing } from './Timing'

export class ElementDefinition      extends Element
{

   static def : string = 'ElementDefinition';
   path : string ;
   representation : PropertyRepresentationEnum [];
   name : string ;
   label : string ;
   code : Coding [];
   slicing : ElementDefinition_Slicing ;
   short : string ;
   definition : string ;
   comments : string ;
   requirements : string ;
   alias : string [];
   min : string ;
   max : string ;
   base : ElementDefinition_Base ;
   type : ElementDefinition_Type [];
   nameReference : string ;
   defaultValueBoolean : string ;
   defaultValueInteger : string ;
   defaultValueDecimal : string ;
   defaultValueBase64Binary : string ;
   defaultValueInstant : string ;
   defaultValueString : string ;
   defaultValueUri : string ;
   defaultValueDate : string ;
   defaultValueDateTime : string ;
   defaultValueTime : string ;
   defaultValueCode : string ;
   defaultValueOid : string ;
   defaultValueUuid : string ;
   defaultValueId : string ;
   defaultValueUnsignedInt : string ;
   defaultValuePositiveInt : string ;
   defaultValueMarkdown : string ;
   defaultValueAnnotation : Annotation ;
   defaultValueAttachment : Attachment ;
   defaultValueIdentifier : Identifier ;
   defaultValueCodeableConcept : CodeableConcept ;
   defaultValueCoding : Coding ;
   defaultValueQuantity : Quantity ;
   defaultValueRange : Range ;
   defaultValuePeriod : Period ;
   defaultValueRatio : Ratio ;
   defaultValueReference : Reference ;
   defaultValueSampledData : SampledData ;
   defaultValueSignature : Signature ;
   defaultValueHumanName : HumanName ;
   defaultValueAddress : Address ;
   defaultValueContactPoint : ContactPoint ;
   defaultValueTiming : Timing ;
   defaultValueMeta : Meta ;
   meaningWhenMissing : string ;
   fixedBoolean : string ;
   fixedInteger : string ;
   fixedDecimal : string ;
   fixedBase64Binary : string ;
   fixedInstant : string ;
   fixedString : string ;
   fixedUri : string ;
   fixedDate : string ;
   fixedDateTime : string ;
   fixedTime : string ;
   fixedCode : string ;
   fixedOid : string ;
   fixedUuid : string ;
   fixedId : string ;
   fixedUnsignedInt : string ;
   fixedPositiveInt : string ;
   fixedMarkdown : string ;
   fixedAnnotation : Annotation ;
   fixedAttachment : Attachment ;
   fixedIdentifier : Identifier ;
   fixedCodeableConcept : CodeableConcept ;
   fixedCoding : Coding ;
   fixedQuantity : Quantity ;
   fixedRange : Range ;
   fixedPeriod : Period ;
   fixedRatio : Ratio ;
   fixedReference : Reference ;
   fixedSampledData : SampledData ;
   fixedSignature : Signature ;
   fixedHumanName : HumanName ;
   fixedAddress : Address ;
   fixedContactPoint : ContactPoint ;
   fixedTiming : Timing ;
   fixedMeta : Meta ;
   patternBoolean : string ;
   patternInteger : string ;
   patternDecimal : string ;
   patternBase64Binary : string ;
   patternInstant : string ;
   patternString : string ;
   patternUri : string ;
   patternDate : string ;
   patternDateTime : string ;
   patternTime : string ;
   patternCode : string ;
   patternOid : string ;
   patternUuid : string ;
   patternId : string ;
   patternUnsignedInt : string ;
   patternPositiveInt : string ;
   patternMarkdown : string ;
   patternAnnotation : Annotation ;
   patternAttachment : Attachment ;
   patternIdentifier : Identifier ;
   patternCodeableConcept : CodeableConcept ;
   patternCoding : Coding ;
   patternQuantity : Quantity ;
   patternRange : Range ;
   patternPeriod : Period ;
   patternRatio : Ratio ;
   patternReference : Reference ;
   patternSampledData : SampledData ;
   patternSignature : Signature ;
   patternHumanName : HumanName ;
   patternAddress : Address ;
   patternContactPoint : ContactPoint ;
   patternTiming : Timing ;
   patternMeta : Meta ;
   exampleBoolean : string ;
   exampleInteger : string ;
   exampleDecimal : string ;
   exampleBase64Binary : string ;
   exampleInstant : string ;
   exampleString : string ;
   exampleUri : string ;
   exampleDate : string ;
   exampleDateTime : string ;
   exampleTime : string ;
   exampleCode : string ;
   exampleOid : string ;
   exampleUuid : string ;
   exampleId : string ;
   exampleUnsignedInt : string ;
   examplePositiveInt : string ;
   exampleMarkdown : string ;
   exampleAnnotation : Annotation ;
   exampleAttachment : Attachment ;
   exampleIdentifier : Identifier ;
   exampleCodeableConcept : CodeableConcept ;
   exampleCoding : Coding ;
   exampleQuantity : Quantity ;
   exampleRange : Range ;
   examplePeriod : Period ;
   exampleRatio : Ratio ;
   exampleReference : Reference ;
   exampleSampledData : SampledData ;
   exampleSignature : Signature ;
   exampleHumanName : HumanName ;
   exampleAddress : Address ;
   exampleContactPoint : ContactPoint ;
   exampleTiming : Timing ;
   exampleMeta : Meta ;
   minValueBoolean : string ;
   minValueInteger : string ;
   minValueDecimal : string ;
   minValueBase64Binary : string ;
   minValueInstant : string ;
   minValueString : string ;
   minValueUri : string ;
   minValueDate : string ;
   minValueDateTime : string ;
   minValueTime : string ;
   minValueCode : string ;
   minValueOid : string ;
   minValueUuid : string ;
   minValueId : string ;
   minValueUnsignedInt : string ;
   minValuePositiveInt : string ;
   minValueMarkdown : string ;
   minValueAnnotation : Annotation ;
   minValueAttachment : Attachment ;
   minValueIdentifier : Identifier ;
   minValueCodeableConcept : CodeableConcept ;
   minValueCoding : Coding ;
   minValueQuantity : Quantity ;
   minValueRange : Range ;
   minValuePeriod : Period ;
   minValueRatio : Ratio ;
   minValueReference : Reference ;
   minValueSampledData : SampledData ;
   minValueSignature : Signature ;
   minValueHumanName : HumanName ;
   minValueAddress : Address ;
   minValueContactPoint : ContactPoint ;
   minValueTiming : Timing ;
   minValueMeta : Meta ;
   maxValueBoolean : string ;
   maxValueInteger : string ;
   maxValueDecimal : string ;
   maxValueBase64Binary : string ;
   maxValueInstant : string ;
   maxValueString : string ;
   maxValueUri : string ;
   maxValueDate : string ;
   maxValueDateTime : string ;
   maxValueTime : string ;
   maxValueCode : string ;
   maxValueOid : string ;
   maxValueUuid : string ;
   maxValueId : string ;
   maxValueUnsignedInt : string ;
   maxValuePositiveInt : string ;
   maxValueMarkdown : string ;
   maxValueAnnotation : Annotation ;
   maxValueAttachment : Attachment ;
   maxValueIdentifier : Identifier ;
   maxValueCodeableConcept : CodeableConcept ;
   maxValueCoding : Coding ;
   maxValueQuantity : Quantity ;
   maxValueRange : Range ;
   maxValuePeriod : Period ;
   maxValueRatio : Ratio ;
   maxValueReference : Reference ;
   maxValueSampledData : SampledData ;
   maxValueSignature : Signature ;
   maxValueHumanName : HumanName ;
   maxValueAddress : Address ;
   maxValueContactPoint : ContactPoint ;
   maxValueTiming : Timing ;
   maxValueMeta : Meta ;
   maxLength : string ;
   condition : string [];
   constraint : ElementDefinition_Constraint [];
   mustSupport : string ;
   isModifier : string ;
   isSummary : string ;
   binding : ElementDefinition_Binding ;
   mapping : ElementDefinition_Mapping [];
}
