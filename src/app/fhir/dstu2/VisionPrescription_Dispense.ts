import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { SimpleQuantity } from './SimpleQuantity'
import { VisionBaseEnum } from './VisionBaseEnum'
import { VisionEyesEnum } from './VisionEyesEnum'

export class VisionPrescription_Dispense      extends BackboneElement
{

   static def : string = 'VisionPrescription_Dispense';
   product : Coding ;
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
   duration : SimpleQuantity ;
   color : string ;
   brand : string ;
   notes : string ;
}
