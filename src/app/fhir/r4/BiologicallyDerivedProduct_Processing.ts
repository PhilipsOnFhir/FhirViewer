import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'

export class BiologicallyDerivedProduct_Processing      extends BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Processing';
   description : string ;
   procedure : CodeableConcept ;
   additive : Reference ;
   timeDateTime : string ;
   timePeriod : Period ;
}
