import {HumanName} from "fhir2angular-r4";;

export class HumanNameUtil{

  static getPreferredName( humanName: HumanName ): string {
    let name: string = "Unknown";
    if ( humanName ){
      if ( humanName.text && humanName.text.length>0 ){ name = humanName.text }
      else{
        if ( humanName.given){
          name="";
          humanName.given.forEach(
            given => name+=given+" "
          )
        }
        if ( humanName.family){
          name+=humanName.family;
        }

      }
    }

    // name = ( (patient.name&&this.name.length>0 ? patient.name[0].text : "Unknown"));
    return name;
  }
}
