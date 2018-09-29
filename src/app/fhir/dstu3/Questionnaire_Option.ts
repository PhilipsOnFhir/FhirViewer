import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class Questionnaire_Option      extends BackboneElement
{

   static def : string = 'Questionnaire_Option';
   valueInteger : string ;
   valueDate : string ;
   valueTime : string ;
   valueString : string ;
   valueCoding : Coding ;
}
