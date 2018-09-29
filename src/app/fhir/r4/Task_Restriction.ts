import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'

export class Task_Restriction      extends BackboneElement
{

   static def : string = 'Task_Restriction';
   repetitions : string ;
   period : Period ;
   recipient : Reference [];
}
