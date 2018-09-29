import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Period } from './Period'

export class Encounter_ClassHistory      extends BackboneElement
{

   static def : string = 'Encounter_ClassHistory';
   class : Coding ;
   period : Period ;
}
