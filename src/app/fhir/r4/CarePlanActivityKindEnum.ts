import { DomainResource } from './DomainResource'

export enum CarePlanActivityKindEnum{
    APPOINTMENT = 'Appointment',
    COMMUNICATIONREQUEST = 'CommunicationRequest',
    DEVICEREQUEST = 'DeviceRequest',
    MEDICATIONREQUEST = 'MedicationRequest',
    NUTRITIONORDER = 'NutritionOrder',
    SERVICEREQUEST = 'ServiceRequest',
    TASK = 'Task',
    VISIONPRESCRIPTION = 'VisionPrescription',
}
