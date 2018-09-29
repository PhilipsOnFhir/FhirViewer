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
import { Timing } from './Timing'

export class Parameters_Parameter      extends BackboneElement
{

   static def : string = 'Parameters_Parameter';
   name : string ;
   valueBase64Binary : string ;
   valueBoolean : string ;
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
   valueMoney : string ;
   valuePeriod : Period ;
   valueQuantity : Quantity ;
   valueRange : Range ;
   valueRatio : Ratio ;
   valueReference : Reference ;
   valueSampledData : SampledData ;
   valueSignature : Signature ;
   valueTiming : Timing ;
   valueMeta : Meta ;
   resource : DomainResource ;
   part : Parameters_Parameter [];
}
