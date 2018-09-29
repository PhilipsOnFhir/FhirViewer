import { DomainResource } from './DomainResource'

export enum ConceptMapEquivalenceEnum{
    DISJOINT = 'disjoint',
    EQUAL = 'equal',
    EQUIVALENT = 'equivalent',
    INEXACT = 'inexact',
    NARROWER = 'narrower',
    SPECIALIZES = 'specializes',
    SUBSUMES = 'subsumes',
    UNMATCHED = 'unmatched',
    WIDER = 'wider',
}
