import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ExpansionProfile_Exclude } from './ExpansionProfile_Exclude'
import { ExpansionProfile_Include } from './ExpansionProfile_Include'

export class ExpansionProfile_Designation      extends BackboneElement
{

   static def : string = 'ExpansionProfile_Designation';
   include : ExpansionProfile_Include ;
   exclude : ExpansionProfile_Exclude ;
}
