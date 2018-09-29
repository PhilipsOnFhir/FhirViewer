import { BackboneElement } from './BackboneElement'
import { DeviceMetricCalibrationStateEnum } from './DeviceMetricCalibrationStateEnum'
import { DeviceMetricCalibrationTypeEnum } from './DeviceMetricCalibrationTypeEnum'
import { DomainResource } from './DomainResource'

export class DeviceMetric_Calibration      extends BackboneElement
{

   static def : string = 'DeviceMetric_Calibration';
   type : DeviceMetricCalibrationTypeEnum ;
   state : DeviceMetricCalibrationStateEnum ;
   time : string ;
}
