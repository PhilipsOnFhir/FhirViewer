import { DomainResource } from './DomainResource'
import { SubstanceReferenceInformation_Classification } from './SubstanceReferenceInformation_Classification'
import { SubstanceReferenceInformation_Gene } from './SubstanceReferenceInformation_Gene'
import { SubstanceReferenceInformation_GeneElement } from './SubstanceReferenceInformation_GeneElement'
import { SubstanceReferenceInformation_Relationship } from './SubstanceReferenceInformation_Relationship'
import { SubstanceReferenceInformation_Target } from './SubstanceReferenceInformation_Target'

export class SubstanceReferenceInformation      extends DomainResource
{

   static def : string = 'SubstanceReferenceInformation';
   comment : string ;
   gene : SubstanceReferenceInformation_Gene [];
   geneElement : SubstanceReferenceInformation_GeneElement [];
   classification : SubstanceReferenceInformation_Classification [];
   relationship : SubstanceReferenceInformation_Relationship [];
   target : SubstanceReferenceInformation_Target [];
}
