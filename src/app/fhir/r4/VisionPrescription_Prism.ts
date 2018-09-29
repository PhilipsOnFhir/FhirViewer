import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { VisionBaseEnum } from './VisionBaseEnum'

export class VisionPrescription_Prism      extends BackboneElement
{

   static def : string = 'VisionPrescription_Prism';
   amount : string ;
   base : VisionBaseEnum ;
}
