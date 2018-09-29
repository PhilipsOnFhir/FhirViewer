import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Period } from './Period'

export class BiologicallyDerivedProduct_Manipulation      extends BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Manipulation';
   description : string ;
   timeDateTime : string ;
   timePeriod : Period ;
}
