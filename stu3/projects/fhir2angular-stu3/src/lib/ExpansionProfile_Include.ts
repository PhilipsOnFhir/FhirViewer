import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ExpansionProfile_Designation1 } from './ExpansionProfile_Designation1'

export class ExpansionProfile_Include      extends BackboneElement
{

   static def : string = 'ExpansionProfile_Include';
   designation : ExpansionProfile_Designation1 [];
}
