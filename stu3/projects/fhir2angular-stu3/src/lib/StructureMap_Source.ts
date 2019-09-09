import { Address } from './Address'
import { Annotation } from './Annotation'
import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { HumanName } from './HumanName'
import { Identifier } from './Identifier'
import { Meta } from './Meta'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Ratio } from './Ratio'
import { Reference } from './Reference'
import { SampledData } from './SampledData'
import { Signature } from './Signature'
import { StructureMapSourceListModeEnum } from './StructureMapSourceListModeEnum'
import { Timing } from './Timing'

export class StructureMap_Source      extends BackboneElement
{

   static def : string = 'StructureMap_Source';
   context : string ;
   min : string ;
   max : string ;
   type : string ;
   defaultValueBase64Binary : string ;
   defaultValueBoolean : boolean ;
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
   defaultValueMoney : string ;
   defaultValuePeriod : Period ;
   defaultValueQuantity : Quantity ;
   defaultValueRange : Range ;
   defaultValueRatio : Ratio ;
   defaultValueReference : Reference ;
   defaultValueSampledData : SampledData ;
   defaultValueSignature : Signature ;
   defaultValueTiming : Timing ;
   defaultValueMeta : Meta ;
   element : string ;
   listMode : StructureMapSourceListModeEnum ;
   variable : string ;
   condition : string ;
   check : string ;
}
