import { DomainResource } from './DomainResource'

export enum ResearchStudyStatusEnum{
    ACTIVE = 'active',
    ADMINISTRATIVELY_COMPLETED = 'administratively-completed',
    APPROVED = 'approved',
    CLOSED_TO_ACCRUAL = 'closed-to-accrual',
    CLOSED_TO_ACCRUAL_AND_INTERVENTION = 'closed-to-accrual-and-intervention',
    COMPLETED = 'completed',
    DISAPPROVED = 'disapproved',
    IN_REVIEW = 'in-review',
    TEMPORARILY_CLOSED_TO_ACCRUAL = 'temporarily-closed-to-accrual',
    TEMPORARILY_CLOSED_TO_ACCRUAL_AND_INTERVENTION = 'temporarily-closed-to-accrual-and-intervention',
    WITHDRAWN = 'withdrawn',
}
