import { BiologicallyDerivedProductCategoryEnum } from './BiologicallyDerivedProductCategoryEnum'
import { BiologicallyDerivedProductStatusEnum } from './BiologicallyDerivedProductStatusEnum'
import { BiologicallyDerivedProduct_Collection } from './BiologicallyDerivedProduct_Collection'
import { BiologicallyDerivedProduct_Manipulation } from './BiologicallyDerivedProduct_Manipulation'
import { BiologicallyDerivedProduct_Processing } from './BiologicallyDerivedProduct_Processing'
import { BiologicallyDerivedProduct_Storage } from './BiologicallyDerivedProduct_Storage'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class BiologicallyDerivedProduct      extends DomainResource
{

   static def : string = 'BiologicallyDerivedProduct';
   identifier : Identifier [];
   productCategory : BiologicallyDerivedProductCategoryEnum ;
   productCode : CodeableConcept ;
   status : BiologicallyDerivedProductStatusEnum ;
   request : Reference [];
   quantity : string ;
   parent : Reference ;
   collection : BiologicallyDerivedProduct_Collection ;
   processing : BiologicallyDerivedProduct_Processing [];
   manipulation : BiologicallyDerivedProduct_Manipulation ;
   storage : BiologicallyDerivedProduct_Storage [];
}
