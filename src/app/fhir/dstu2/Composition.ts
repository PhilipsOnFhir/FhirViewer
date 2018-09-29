import { CodeableConcept } from './CodeableConcept'
import { CompositionStatusEnum } from './CompositionStatusEnum'
import { Composition_Attester } from './Composition_Attester'
import { Composition_Event } from './Composition_Event'
import { Composition_Section } from './Composition_Section'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Composition      extends DomainResource
{

   static def : string = 'Composition';
   identifier : Identifier ;
   date : string ;
   type : CodeableConcept ;
   class : CodeableConcept ;
   title : string ;
   status : CompositionStatusEnum ;
   confidentiality : string ;
   subject : Reference ;
   author : Reference [];
   attester : Composition_Attester [];
   custodian : Reference ;
   event : Composition_Event [];
   encounter : Reference ;
   section : Composition_Section [];
}
