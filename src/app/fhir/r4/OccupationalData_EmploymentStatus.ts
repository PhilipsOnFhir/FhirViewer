import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'

export class OccupationalData_EmploymentStatus      extends BackboneElement
{

   static def : string = 'OccupationalData_EmploymentStatus';
   code : CodeableConcept ;
   effective : Period ;
}
