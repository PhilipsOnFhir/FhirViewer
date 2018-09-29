import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { SubstancePolymer_MonomerSet } from './SubstancePolymer_MonomerSet'
import { SubstancePolymer_Repeat } from './SubstancePolymer_Repeat'

export class SubstancePolymer      extends DomainResource
{

   static def : string = 'SubstancePolymer';
   class : CodeableConcept ;
   geometry : CodeableConcept ;
   copolymerConnectivity : CodeableConcept [];
   modification : string [];
   monomerSet : SubstancePolymer_MonomerSet [];
   repeat : SubstancePolymer_Repeat [];
}
