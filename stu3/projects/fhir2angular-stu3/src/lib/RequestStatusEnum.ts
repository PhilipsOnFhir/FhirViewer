import { DomainResource } from './DomainResource';

export enum RequestStatusEnum{
    ACTIVE = 'active',
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
    DRAFT = 'draft',
    ENTERED_IN_ERROR = 'entered-in-error',
    SUSPENDED = 'suspended',
    UNKNOWN = 'unknown',
}
