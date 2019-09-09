import { ContactPointSystemEnum } from './ContactPointSystemEnum'
import { ContactPointUseEnum } from './ContactPointUseEnum'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Period } from './Period'

export class ContactPoint      extends Element
{

   static def : string = 'ContactPoint';
   system : ContactPointSystemEnum ;
   value : string ;
   use : ContactPointUseEnum ;
   rank : string ;
   period : Period ;
}
