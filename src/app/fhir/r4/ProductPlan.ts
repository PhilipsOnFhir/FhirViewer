import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { ProductPlan_Contact } from './ProductPlan_Contact'
import { ProductPlan_Coverage } from './ProductPlan_Coverage'
import { ProductPlan_Plan } from './ProductPlan_Plan'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'

export class ProductPlan      extends DomainResource
{

   static def : string = 'ProductPlan';
   identifier : Identifier [];
   status : PublicationStatusEnum ;
   type : CodeableConcept [];
   name : string ;
   alias : string [];
   period : Period ;
   ownedBy : Reference ;
   administeredBy : Reference ;
   coverageArea : Reference [];
   contact : ProductPlan_Contact [];
   endpoint : Reference [];
   network : Reference [];
   coverage : ProductPlan_Coverage [];
   plan : ProductPlan_Plan [];
}
