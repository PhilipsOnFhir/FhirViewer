import {RiskAssessment} from '../../fhir/dstu3/RiskAssessment';

export class RiskAssessmentUtil {

    static getSummary( riskAssessment: RiskAssessment): string {
        let summary = '';
        if ( riskAssessment.code && riskAssessment.code.coding.length > 0 ) {
            summary = riskAssessment.code.coding[0].display;
        }
        if ( riskAssessment.prediction && riskAssessment.prediction.length > 0) {
            if ( riskAssessment.prediction[0].qualitativeRisk
                && riskAssessment.prediction[0].qualitativeRisk.coding
                && riskAssessment.prediction[0].qualitativeRisk.coding.length > 0
            ) {
                const qualitativeRisk = riskAssessment.prediction[0].qualitativeRisk.coding[0];
                summary += ' : ' + (qualitativeRisk.display ? qualitativeRisk.display : qualitativeRisk.code );
            }
            if (  riskAssessment.prediction[0].rationale ) {
                summary += ' : ' + riskAssessment.prediction[0].rationale;
            }
        }
        return summary;
    }
}
