import { AccountStatusEnum } from './AccountStatusEnum'
import { Account_Coverage } from './Account_Coverage'
import { Account_Guarantor } from './Account_Guarantor'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Account      extends DomainResource
{

   static def : string = 'Account';
   identifier : Identifier [];
   status : AccountStatusEnum ;
   type : CodeableConcept ;
   name : string ;
   subject : Reference ;
   period : Period ;
   active : Period ;
   balance : string ;
   coverage : Account_Coverage [];
   owner : Reference ;
   description : string ;
   guarantor : Account_Guarantor [];
}
