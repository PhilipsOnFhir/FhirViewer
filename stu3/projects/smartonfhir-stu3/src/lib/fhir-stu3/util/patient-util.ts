import {Patient} from "fhir2angular-stu3";

export class PatientUtil {

  static getPreferredName( patient: Patient ): string {
    let name: string = "Unknown";
    if ( patient.name&& patient.name.length>0 ){
      if ( patient.name[0].text && patient.name[0].text.length>0 ){ name = patient.name[0].text }
      else{
        if ( patient.name[0].given){
          name="";
          patient.name[0].given.forEach(
            given => name+=given+" "
          )
        }
        if ( patient.name[0].family){
          name+=patient.name[0].family;
        }

      }
    }

    // name = ( (patient.name&&this.name.length>0 ? patient.name[0].text : "Unknown"));
    return name;
  }
}
