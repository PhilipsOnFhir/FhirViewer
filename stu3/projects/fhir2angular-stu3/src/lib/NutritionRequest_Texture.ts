import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class NutritionRequest_Texture      extends BackboneElement
{

   static def : string = 'NutritionRequest_Texture';
   modifier : CodeableConcept ;
   foodType : CodeableConcept ;
}
