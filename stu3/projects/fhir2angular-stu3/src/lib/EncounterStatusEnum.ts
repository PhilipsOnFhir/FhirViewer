import { DomainResource } from './DomainResource';

export enum EncounterStatusEnum{
    ARRIVED = 'arrived',
    CANCELLED = 'cancelled',
    ENTERED_IN_ERROR = 'entered-in-error',
    FINISHED = 'finished',
    IN_PROGRESS = 'in-progress',
    ONLEAVE = 'onleave',
    PLANNED = 'planned',
    TRIAGED = 'triaged',
    UNKNOWN = 'unknown',
}
