import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class Questionnaire_EnableWhen      extends BackboneElement
{

   static def : string = 'Questionnaire_EnableWhen';
   question : string ;
   hasAnswer : boolean ;
   answerBoolean : boolean ;
   answerDecimal : string ;
   answerInteger : string ;
   answerDate : string ;
   answerDateTime : string ;
   answerTime : string ;
   answerString : string ;
   answerUri : string ;
   answerAttachment : Attachment ;
   answerCoding : Coding ;
   answerQuantity : Quantity ;
   answerReference : Reference ;
}
