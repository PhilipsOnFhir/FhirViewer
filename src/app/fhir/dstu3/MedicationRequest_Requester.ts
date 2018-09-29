import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MedicationRequest_Requester      extends BackboneElement
{

   static def : string = 'MedicationRequest_Requester';
   agent : Reference ;
   onBehalfOf : Reference ;
}
