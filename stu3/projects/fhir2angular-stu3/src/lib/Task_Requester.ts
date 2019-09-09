import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Task_Requester      extends BackboneElement
{

   static def : string = 'Task_Requester';
   agent : Reference ;
   onBehalfOf : Reference ;
}
