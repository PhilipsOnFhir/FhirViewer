import { BackboneElement } from './BackboneElement'
import { Catalog_RelatedItem } from './Catalog_RelatedItem'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Catalog_Entry      extends BackboneElement
{

   static def : string = 'Catalog_Entry';
   type : CodeableConcept ;
   referencedItem : Reference ;
   identifier : Identifier ;
   additionalIdentifier : Identifier [];
   classification : Identifier [];
   status : CodeableConcept ;
   validFrom : string ;
   validTo : string ;
   lastUpdated : string ;
   additionalCharacteristic : CodeableConcept [];
   additionalClassification : CodeableConcept [];
   relatedItem : Catalog_RelatedItem [];
}
