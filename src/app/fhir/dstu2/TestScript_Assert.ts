import { AssertionDirectionTypeEnum } from './AssertionDirectionTypeEnum'
import { AssertionOperatorTypeEnum } from './AssertionOperatorTypeEnum'
import { AssertionResponseTypesEnum } from './AssertionResponseTypesEnum'
import { BackboneElement } from './BackboneElement'
import { ContentTypeEnum } from './ContentTypeEnum'
import { DomainResource } from './DomainResource'

export class TestScript_Assert      extends BackboneElement
{

   static def : string = 'TestScript_Assert';
   label : string ;
   description : string ;
   direction : AssertionDirectionTypeEnum ;
   compareToSourceId : string ;
   compareToSourcePath : string ;
   contentType : ContentTypeEnum ;
   headerField : string ;
   minimumId : string ;
   navigationLinks : string ;
   operator : AssertionOperatorTypeEnum ;
   path : string ;
   resource : string ;
   response : AssertionResponseTypesEnum ;
   responseCode : string ;
   sourceId : string ;
   validateProfileId : string ;
   value : string ;
   warningOnly : string ;
}
