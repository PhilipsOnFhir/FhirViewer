import { AccountStatusEnum } from './AccountStatusEnum'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Money } from './Money'
import { Period } from './Period'
import { Reference } from './Reference'

export class Account      extends DomainResource
{

   static def : string = 'Account';
   identifier : Identifier [];
   name : string ;
   type : CodeableConcept ;
   status : AccountStatusEnum ;
   activePeriod : Period ;
   currency : Coding ;
   balance : Money ;
   coveragePeriod : Period ;
   subject : Reference ;
   owner : Reference ;
   description : string ;
}
