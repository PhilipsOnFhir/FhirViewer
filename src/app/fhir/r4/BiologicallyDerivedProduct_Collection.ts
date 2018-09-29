import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'

export class BiologicallyDerivedProduct_Collection      extends BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Collection';
   collector : Reference ;
   source : Reference ;
   collectedDateTime : string ;
   collectedPeriod : Period ;
}
