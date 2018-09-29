import { DomainResource } from './DomainResource'

export enum AppointmentStatusEnum{
    ARRIVED = 'arrived',
    BOOKED = 'booked',
    CANCELLED = 'cancelled',
    CHECKED_IN = 'checked-in',
    ENTERED_IN_ERROR = 'entered-in-error',
    FULFILLED = 'fulfilled',
    NOSHOW = 'noshow',
    PENDING = 'pending',
    PROPOSED = 'proposed',
}
