import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { ResearchSubjectStatusEnum } from './ResearchSubjectStatusEnum'

export class ResearchSubject      extends DomainResource
{

   static def : string = 'ResearchSubject';
   identifier : Identifier ;
   status : ResearchSubjectStatusEnum ;
   period : Period ;
   study : Reference ;
   individual : Reference ;
   assignedArm : string ;
   actualArm : string ;
   consent : Reference ;
}
