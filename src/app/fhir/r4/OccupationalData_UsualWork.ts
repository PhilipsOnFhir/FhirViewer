import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class OccupationalData_UsualWork      extends BackboneElement
{

   static def : string = 'OccupationalData_UsualWork';
   occupation : CodeableConcept ;
   industry : CodeableConcept ;
   start : string ;
   duration : string ;
}
