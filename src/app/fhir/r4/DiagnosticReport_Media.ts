import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class DiagnosticReport_Media      extends BackboneElement
{

   static def : string = 'DiagnosticReport_Media';
   comment : string ;
   link : Reference ;
}
