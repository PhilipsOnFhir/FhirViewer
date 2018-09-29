import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { LinkTypeEnum } from './LinkTypeEnum'
import { Reference } from './Reference'

export class Patient_Link      extends BackboneElement
{

   static def : string = 'Patient_Link';
   other : Reference ;
   type : LinkTypeEnum ;
}
