import { DomainResource } from './DomainResource';

export enum AppointmentStatusEnum{
    ARRIVED = 'arrived',
    BOOKED = 'booked',
    CANCELLED = 'cancelled',
    ENTERED_IN_ERROR = 'entered-in-error',
    FULFILLED = 'fulfilled',
    NOSHOW = 'noshow',
    PENDING = 'pending',
    PROPOSED = 'proposed',
}
