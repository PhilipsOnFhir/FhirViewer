import { AssertionDirectionTypeEnum } from './AssertionDirectionTypeEnum'
import { AssertionOperatorTypeEnum } from './AssertionOperatorTypeEnum'
import { AssertionResponseTypesEnum } from './AssertionResponseTypesEnum'
import { BackboneElement } from './BackboneElement'
import { ContentTypeEnum } from './ContentTypeEnum'
import { DomainResource } from './DomainResource'
import { FHIRDefinedTypeEnum } from './FHIRDefinedTypeEnum'
import { TestScriptRequestMethodCodeEnum } from './TestScriptRequestMethodCodeEnum'
import { TestScript_Rule2 } from './TestScript_Rule2'
import { TestScript_Ruleset1 } from './TestScript_Ruleset1'

export class TestScript_Assert      extends BackboneElement
{

   static def : string = 'TestScript_Assert';
   label : string ;
   description : string ;
   direction : AssertionDirectionTypeEnum ;
   compareToSourceId : string ;
   compareToSourceExpression : string ;
   compareToSourcePath : string ;
   contentType : ContentTypeEnum ;
   expression : string ;
   headerField : string ;
   minimumId : string ;
   navigationLinks : string ;
   operator : AssertionOperatorTypeEnum ;
   path : string ;
   requestMethod : TestScriptRequestMethodCodeEnum ;
   requestURL : string ;
   resource : FHIRDefinedTypeEnum ;
   response : AssertionResponseTypesEnum ;
   responseCode : string ;
   rule : TestScript_Rule2 ;
   ruleset : TestScript_Ruleset1 ;
   sourceId : string ;
   validateProfileId : string ;
   value : string ;
   warningOnly : string ;
}
