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
import { Timing } from './Timing'
import { TriggerDefinition } from './TriggerDefinition'
import { UsageContext } from './UsageContext'

export class ElementDefinition_Example      extends Element
{

   static def : string = 'ElementDefinition_Example';
   label : string ;
   valueBase64Binary : string ;
   valueBoolean : string ;
   valueCanonical : string ;
   valueCode : string ;
   valueDate : string ;
   valueDateTime : string ;
   valueDecimal : string ;
   valueId : string ;
   valueInstant : string ;
   valueInteger : string ;
   valueMarkdown : string ;
   valueOid : string ;
   valuePositiveInt : string ;
   valueString : string ;
   valueTime : string ;
   valueUnsignedInt : string ;
   valueUri : string ;
   valueUrl : string ;
   valueUuid : string ;
   valueAddress : Address ;
   valueAge : string ;
   valueAnnotation : Annotation ;
   valueAttachment : Attachment ;
   valueCodeableConcept : CodeableConcept ;
   valueCoding : Coding ;
   valueContactPoint : ContactPoint ;
   valueCount : string ;
   valueDistance : string ;
   valueDuration : string ;
   valueHumanName : HumanName ;
   valueIdentifier : Identifier ;
   valueMoney : Money ;
   valuePeriod : Period ;
   valueQuantity : Quantity ;
   valueRange : Range ;
   valueRatio : Ratio ;
   valueReference : Reference ;
   valueSampledData : SampledData ;
   valueSignature : Signature ;
   valueTiming : Timing ;
   valueParameterDefinition : ParameterDefinition ;
   valueDataRequirement : DataRequirement ;
   valueRelatedArtifact : RelatedArtifact ;
   valueContactDetail : ContactDetail ;
   valueContributor : Contributor ;
   valueTriggerDefinition : TriggerDefinition ;
   valueUsageContext : UsageContext ;
   valueDosage : Dosage ;
}
