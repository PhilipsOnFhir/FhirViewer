import { DomainResource } from './DomainResource'

export enum BundleTypeEnum{
    BATCH = 'batch',
    BATCH_RESPONSE = 'batch-response',
    COLLECTION = 'collection',
    DOCUMENT = 'document',
    HISTORY = 'history',
    MESSAGE = 'message',
    SEARCHSET = 'searchset',
    TRANSACTION = 'transaction',
    TRANSACTION_RESPONSE = 'transaction-response',
}
