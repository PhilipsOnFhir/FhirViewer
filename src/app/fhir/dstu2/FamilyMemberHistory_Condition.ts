import { Age } from './Age'
import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Range } from './Range'

export class FamilyMemberHistory_Condition      extends BackboneElement
{

   static def : string = 'FamilyMemberHistory_Condition';
   code : CodeableConcept ;
   outcome : CodeableConcept ;
   onsetQuantity : Age ;
   onsetRange : Range ;
   onsetPeriod : Period ;
   onsetString : string ;
   note : Annotation ;
}
