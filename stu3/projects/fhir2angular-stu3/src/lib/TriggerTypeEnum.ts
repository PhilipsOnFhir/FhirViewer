import { DomainResource } from './DomainResource';

export enum TriggerTypeEnum{
    DATA_ACCESS_ENDED = 'data-access-ended',
    DATA_ACCESSED = 'data-accessed',
    DATA_ADDED = 'data-added',
    DATA_MODIFIED = 'data-modified',
    DATA_REMOVED = 'data-removed',
    NAMED_EVENT = 'named-event',
    PERIODIC = 'periodic',
}
