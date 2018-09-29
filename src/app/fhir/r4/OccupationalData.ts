import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { OccupationalData_EmploymentStatus } from './OccupationalData_EmploymentStatus'
import { OccupationalData_PastOrPresentJob } from './OccupationalData_PastOrPresentJob'
import { OccupationalData_UsualWork } from './OccupationalData_UsualWork'
import { Period } from './Period'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'

export class OccupationalData      extends DomainResource
{

   static def : string = 'OccupationalData';
   identifier : Identifier ;
   status : PublicationStatusEnum ;
   subject : Reference ;
   date : string ;
   recorder : Reference [];
   informant : Reference [];
   employmentStatus : OccupationalData_EmploymentStatus [];
   retirementDate : string [];
   combatZonePeriod : Period [];
   usualWork : OccupationalData_UsualWork ;
   pastOrPresentJob : OccupationalData_PastOrPresentJob [];
}
