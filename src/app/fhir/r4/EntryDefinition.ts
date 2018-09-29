import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { EntryDefinition_RelatedEntry } from './EntryDefinition_RelatedEntry'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'

export class EntryDefinition      extends DomainResource
{

   static def : string = 'EntryDefinition';
   identifier : Identifier [];
   type : CodeableConcept ;
   orderable : string ;
   referencedItem : Reference ;
   additionalIdentifier : Identifier [];
   classification : CodeableConcept [];
   status : PublicationStatusEnum ;
   validityPeriod : Period ;
   lastUpdated : string ;
   additionalCharacteristic : CodeableConcept [];
   additionalClassification : CodeableConcept [];
   relatedEntry : EntryDefinition_RelatedEntry [];
}
