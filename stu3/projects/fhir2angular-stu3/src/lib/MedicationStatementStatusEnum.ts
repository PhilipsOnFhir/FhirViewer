import { DomainResource } from './DomainResource';

export enum MedicationStatementStatusEnum{
    ACTIVE = 'active',
    COMPLETED = 'completed',
    ENTERED_IN_ERROR = 'entered-in-error',
    INTENDED = 'intended',
    ON_HOLD = 'on-hold',
    STOPPED = 'stopped',
}
