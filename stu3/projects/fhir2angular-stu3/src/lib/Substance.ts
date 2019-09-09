import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { FHIRSubstanceStatusEnum } from './FHIRSubstanceStatusEnum'
import { Identifier } from './Identifier'
import { Substance_Ingredient } from './Substance_Ingredient'
import { Substance_Instance } from './Substance_Instance'

export class Substance      extends DomainResource
{

   static def : string = 'Substance';
   identifier : Identifier [];
   status : FHIRSubstanceStatusEnum ;
   category : CodeableConcept [];
   code : CodeableConcept ;
   description : string ;
   instance : Substance_Instance [];
   ingredient : Substance_Ingredient [];
}
