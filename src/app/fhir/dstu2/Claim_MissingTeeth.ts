import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class Claim_MissingTeeth      extends BackboneElement
{

   static def : string = 'Claim_MissingTeeth';
   tooth : Coding ;
   reason : Coding ;
   extractionDate : string ;
}
