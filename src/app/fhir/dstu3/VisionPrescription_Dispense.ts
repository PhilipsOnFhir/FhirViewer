import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { VisionBaseEnum } from './VisionBaseEnum'
import { VisionEyesEnum } from './VisionEyesEnum'

export class VisionPrescription_Dispense      extends BackboneElement
{

   static def : string = 'VisionPrescription_Dispense';
   product : CodeableConcept ;
   eye : VisionEyesEnum ;
   sphere : string ;
   cylinder : string ;
   axis : string ;
   prism : string ;
   base : VisionBaseEnum ;
   add : string ;
   power : string ;
   backCurve : string ;
   diameter : string ;
   duration : Quantity ;
   color : string ;
   brand : string ;
   note : Annotation [];
}
