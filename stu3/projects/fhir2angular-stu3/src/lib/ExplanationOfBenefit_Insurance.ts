import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ExplanationOfBenefit_Insurance      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Insurance';
   coverage : Reference ;
   preAuthRef : string [];
}
