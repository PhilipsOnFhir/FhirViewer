import { DomainResource } from './DomainResource'

export enum OrderStatusEnum{
    ABORTED = 'aborted',
    ACCEPTED = 'accepted',
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
    ERROR = 'error',
    PENDING = 'pending',
    REJECTED = 'rejected',
    REPLACED = 'replaced',
    REVIEW = 'review',
}
