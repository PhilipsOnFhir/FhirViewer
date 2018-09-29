import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { MedicinalProduct_CountryLanguage } from './MedicinalProduct_CountryLanguage'
import { MedicinalProduct_NamePart } from './MedicinalProduct_NamePart'

export class MedicinalProduct_Name      extends BackboneElement
{

   static def : string = 'MedicinalProduct_Name';
   fullName : string ;
   namePart : MedicinalProduct_NamePart [];
   countryLanguage : MedicinalProduct_CountryLanguage [];
}
