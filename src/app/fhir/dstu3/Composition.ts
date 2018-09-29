import { CodeableConcept } from './CodeableConcept'
import { CompositionStatusEnum } from './CompositionStatusEnum'
import { Composition_Attester } from './Composition_Attester'
import { Composition_Event } from './Composition_Event'
import { Composition_RelatesTo } from './Composition_RelatesTo'
import { Composition_Section } from './Composition_Section'
import { ConfidentialityClassificationEnum } from './ConfidentialityClassificationEnum'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Composition      extends DomainResource
{

   static def : string = 'Composition';
   identifier : Identifier ;
   status : CompositionStatusEnum ;
   type : CodeableConcept ;
   class : CodeableConcept ;
   subject : Reference ;
   encounter : Reference ;
   date : string ;
   author : Reference [];
   title : string ;
   confidentiality : ConfidentialityClassificationEnum ;
   attester : Composition_Attester [];
   custodian : Reference ;
   relatesTo : Composition_RelatesTo [];
   event : Composition_Event [];
   section : Composition_Section [];
}
