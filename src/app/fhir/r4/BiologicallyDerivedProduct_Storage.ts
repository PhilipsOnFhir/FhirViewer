import { BackboneElement } from './BackboneElement'
import { BiologicallyDerivedProductStorageScaleEnum } from './BiologicallyDerivedProductStorageScaleEnum'
import { DomainResource } from './DomainResource'
import { Period } from './Period'

export class BiologicallyDerivedProduct_Storage      extends BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Storage';
   description : string ;
   temperature : string ;
   scale : BiologicallyDerivedProductStorageScaleEnum ;
   duration : Period ;
}
