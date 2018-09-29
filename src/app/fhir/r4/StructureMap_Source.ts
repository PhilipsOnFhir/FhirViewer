import { Address } from './Address'
import { Annotation } from './Annotation'
import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ContactDetail } from './ContactDetail'
import { ContactPoint } from './ContactPoint'
import { Contributor } from './Contributor'
import { DataRequirement } from './DataRequirement'
import { DomainResource } from './DomainResource'
import { Dosage } from './Dosage'
import { HumanName } from './HumanName'
import { Identifier } from './Identifier'
import { Money } from './Money'
import { ParameterDefinition } from './ParameterDefinition'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Ratio } from './Ratio'
import { Reference } from './Reference'
import { RelatedArtifact } from './RelatedArtifact'
import { SampledData } from './SampledData'
import { Signature } from './Signature'
import { StructureMapSourceListModeEnum } from './StructureMapSourceListModeEnum'
import { Timing } from './Timing'
import { TriggerDefinition } from './TriggerDefinition'
import { UsageContext } from './UsageContext'

export class StructureMap_Source      extends BackboneElement
{

   static def : string = 'StructureMap_Source';
   context : string ;
   min : string ;
   max : string ;
   type : string ;
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
   element : string ;
   listMode : StructureMapSourceListModeEnum ;
   variable : string ;
   condition : string ;
   check : string ;
}
