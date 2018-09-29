import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ProvenanceEntityRoleEnum } from './ProvenanceEntityRoleEnum'
import { Provenance_Agent } from './Provenance_Agent'
import { Reference } from './Reference'

export class Provenance_Entity      extends BackboneElement
{

   static def : string = 'Provenance_Entity';
   role : ProvenanceEntityRoleEnum ;
   whatIdentifier : Identifier ;
   whatReference : Reference ;
   agent : Provenance_Agent [];
}
