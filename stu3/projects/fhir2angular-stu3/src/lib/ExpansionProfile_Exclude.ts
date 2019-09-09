import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ExpansionProfile_Designation2 } from './ExpansionProfile_Designation2'

export class ExpansionProfile_Exclude      extends BackboneElement
{

   static def : string = 'ExpansionProfile_Exclude';
   designation : ExpansionProfile_Designation2 [];
}
