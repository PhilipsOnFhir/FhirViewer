import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { ContentTypeEnum } from './ContentTypeEnum'
import { DomainResource } from './DomainResource'
import { TestScript_RequestHeader } from './TestScript_RequestHeader'

export class TestScript_Operation      extends BackboneElement
{

   static def : string = 'TestScript_Operation';
   type : Coding ;
   resource : string ;
   label : string ;
   description : string ;
   accept : ContentTypeEnum ;
   contentType : ContentTypeEnum ;
   destination : string ;
   encodeRequestUrl : string ;
   params : string ;
   requestHeader : TestScript_RequestHeader [];
   responseId : string ;
   sourceId : string ;
   targetId : string ;
   url : string ;
}
