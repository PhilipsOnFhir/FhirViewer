import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Period } from './Period'

export class PractitionerRole_NotAvailable      extends BackboneElement
{

   static def : string = 'PractitionerRole_NotAvailable';
   description : string ;
   during : Period ;
}
