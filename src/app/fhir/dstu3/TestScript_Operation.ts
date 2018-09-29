import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { ContentTypeEnum } from './ContentTypeEnum'
import { DomainResource } from './DomainResource'
import { FHIRDefinedTypeEnum } from './FHIRDefinedTypeEnum'
import { TestScript_RequestHeader } from './TestScript_RequestHeader'

export class TestScript_Operation      extends BackboneElement
{

   static def : string = 'TestScript_Operation';
   type : Coding ;
   resource : FHIRDefinedTypeEnum ;
   label : string ;
   description : string ;
   accept : ContentTypeEnum ;
   contentType : ContentTypeEnum ;
   destination : string ;
   encodeRequestUrl : string ;
   origin : string ;
   params : string ;
   requestHeader : TestScript_RequestHeader [];
   requestId : string ;
   responseId : string ;
   sourceId : string ;
   targetId : string ;
   url : string ;
}
