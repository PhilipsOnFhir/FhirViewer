import { ContactDetail } from './ContactDetail'
import { ContributorTypeEnum } from './ContributorTypeEnum'
import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class Contributor      extends Element
{

   static def : string = 'Contributor';
   type : ContributorTypeEnum ;
   name : string ;
   contact : ContactDetail [];
}
