import { DomainResource } from './DomainResource';

export enum GoalStatusEnum{
    ACCEPTED = 'accepted',
    ACHIEVED = 'achieved',
    AHEAD_OF_TARGET = 'ahead-of-target',
    BEHIND_TARGET = 'behind-target',
    CANCELLED = 'cancelled',
    ENTERED_IN_ERROR = 'entered-in-error',
    IN_PROGRESS = 'in-progress',
    ON_HOLD = 'on-hold',
    ON_TARGET = 'on-target',
    PLANNED = 'planned',
    PROPOSED = 'proposed',
    REJECTED = 'rejected',
    SUSTAINING = 'sustaining',
}
