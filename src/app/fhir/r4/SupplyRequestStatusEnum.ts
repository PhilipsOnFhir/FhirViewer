import { DomainResource } from './DomainResource'

export enum SupplyRequestStatusEnum{
    ACTIVE = 'active',
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
    DRAFT = 'draft',
    ENTERED_IN_ERROR = 'entered-in-error',
    SUSPENDED = 'suspended',
    UNKNOWN = 'unknown',
}
