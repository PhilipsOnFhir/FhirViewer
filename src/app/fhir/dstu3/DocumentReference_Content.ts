import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class DocumentReference_Content      extends BackboneElement
{

   static def : string = 'DocumentReference_Content';
   attachment : Attachment ;
   format : Coding ;
}
