import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { Contract_Data } from './Contract_Data'
import { Contract_ValuedItem } from './Contract_ValuedItem'
import { DomainResource } from './DomainResource'
import { Period } from './Period'

export class Contract_Asset      extends BackboneElement
{

   static def : string = 'Contract_Asset';
   class : Coding ;
   code : Coding ;
   period : Period ;
   dataPeriod : Period ;
   data : Contract_Data [];
   valuedItem : Contract_ValuedItem [];
   securityLabel : Coding [];
}
