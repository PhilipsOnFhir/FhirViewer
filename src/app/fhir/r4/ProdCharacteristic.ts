import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class ProdCharacteristic      extends BackboneElement
{

   static def : string = 'ProdCharacteristic';
   height : Quantity ;
   width : Quantity ;
   depth : Quantity ;
   weight : Quantity ;
   nominalVolume : Quantity ;
   externalDiameter : Quantity ;
   shape : string ;
   color : string [];
   imprint : string [];
   image : Attachment [];
   scoring : CodeableConcept ;
}
