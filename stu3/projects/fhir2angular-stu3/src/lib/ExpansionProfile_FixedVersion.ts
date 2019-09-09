import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { SystemVersionProcessingModeEnum } from './SystemVersionProcessingModeEnum'

export class ExpansionProfile_FixedVersion      extends BackboneElement
{

   static def : string = 'ExpansionProfile_FixedVersion';
   system : string ;
   version : string ;
   mode : SystemVersionProcessingModeEnum ;
}
