import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { ProvenanceEntityRoleEnum } from './ProvenanceEntityRoleEnum'
import { Provenance_Agent } from './Provenance_Agent'

export class Provenance_Entity      extends BackboneElement
{

   static def : string = 'Provenance_Entity';
   role : ProvenanceEntityRoleEnum ;
   type : Coding ;
   reference : string ;
   display : string ;
   agent : Provenance_Agent ;
}
