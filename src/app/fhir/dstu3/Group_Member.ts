import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'

export class Group_Member      extends BackboneElement
{

   static def : string = 'Group_Member';
   entity : Reference ;
   period : Period ;
   inactive : string ;
}
