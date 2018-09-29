import { DomainResource } from './DomainResource'

export enum MedicationRequestStatusEnum{
    ACTIVE = 'active',
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
    DRAFT = 'draft',
    ENTERED_IN_ERROR = 'entered-in-error',
    ON_HOLD = 'on-hold',
    STOPPED = 'stopped',
    UNKNOWN = 'unknown',
}
