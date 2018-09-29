import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Period } from './Period'

export class OrganizationRole_NotAvailable      extends BackboneElement
{

   static def : string = 'OrganizationRole_NotAvailable';
   description : string ;
   during : Period ;
}
