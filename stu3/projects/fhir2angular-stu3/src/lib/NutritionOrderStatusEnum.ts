import { DomainResource } from './DomainResource';

export enum NutritionOrderStatusEnum{
    ACTIVE = 'active',
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
    DRAFT = 'draft',
    ENTERED_IN_ERROR = 'entered-in-error',
    ON_HOLD = 'on-hold',
    PLANNED = 'planned',
    PROPOSED = 'proposed',
    REQUESTED = 'requested',
}
