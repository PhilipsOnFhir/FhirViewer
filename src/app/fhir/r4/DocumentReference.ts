import { CodeableConcept } from './CodeableConcept'
import { CompositionStatusEnum } from './CompositionStatusEnum'
import { DocumentReferenceStatusEnum } from './DocumentReferenceStatusEnum'
import { DocumentReference_Agent } from './DocumentReference_Agent'
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
   status : DocumentReferenceStatusEnum ;
   docStatus : CompositionStatusEnum ;
   type : CodeableConcept ;
   class : CodeableConcept ;
   subject : Reference ;
   created : string ;
   date : string ;
   agent : DocumentReference_Agent [];
   authenticator : Reference ;
   custodian : Reference ;
   relatesTo : DocumentReference_RelatesTo [];
   description : string ;
   securityLabel : CodeableConcept [];
   content : DocumentReference_Content [];
   context : DocumentReference_Context ;
}
