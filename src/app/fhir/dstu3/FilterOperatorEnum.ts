import { DomainResource } from './DomainResource'

export enum FilterOperatorEnum{
    EQUALS = '=',
    DESCENDENT_OF = 'descendent-of',
    EXISTS = 'exists',
    GENERALIZES = 'generalizes',
    IN = 'in',
    IS_A = 'is-a',
    IS_NOT_A = 'is-not-a',
    NOT_IN = 'not-in',
    REGEX = 'regex',
}
