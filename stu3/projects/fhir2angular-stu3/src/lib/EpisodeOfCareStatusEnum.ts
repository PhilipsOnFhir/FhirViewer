import { DomainResource } from './DomainResource';

export enum EpisodeOfCareStatusEnum{
    ACTIVE = 'active',
    CANCELLED = 'cancelled',
    ENTERED_IN_ERROR = 'entered-in-error',
    FINISHED = 'finished',
    ONHOLD = 'onhold',
    PLANNED = 'planned',
    WAITLIST = 'waitlist',
}
