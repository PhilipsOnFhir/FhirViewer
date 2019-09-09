import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class DiagnosticReport_Image      extends BackboneElement
{

   static def : string = 'DiagnosticReport_Image';
   comment : string ;
   link : Reference ;
}
