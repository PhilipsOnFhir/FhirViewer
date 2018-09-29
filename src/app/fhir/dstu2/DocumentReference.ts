import { CodeableConcept } from './CodeableConcept'
import { DocumentReference_Content } from './DocumentReference_Content'
import { DocumentReference_Context } from './DocumentReference_Context'
import { DocumentReference_RelatesTo } from './DocumentReference_RelatesTo'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class DocumentReference      extends DomainResource
{

   static def : string = 'DocumentReference';
   masterIdentifier : Identifier ;
   identifier : Identifier [];
   subject : Reference ;
   type : CodeableConcept ;
   class : CodeableConcept ;
   author : Reference [];
   custodian : Reference ;
   authenticator : Reference ;
   created : string ;
   indexed : string ;
   status : string ;
   docStatus : CodeableConcept ;
   relatesTo : DocumentReference_RelatesTo [];
   description : string ;
   securityLabel : CodeableConcept [];
   content : DocumentReference_Content [];
   context : DocumentReference_Context ;
}
