import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Period } from './Period'

export class HealthcareService_NotAvailable      extends BackboneElement
{

   static def : string = 'HealthcareService_NotAvailable';
   description : string ;
   during : Period ;
}
