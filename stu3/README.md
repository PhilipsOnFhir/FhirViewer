# FHIR STU3 viewer

An Angular 6 application that renders the contents of a (Smart on) FHIR respository. The viewer application 
(FHIR viewer) demonstrates (besides rendering) the operations and dynamics associated with:
* bulk data export
* clinical reasoning
* questionaire to structured data transforms.

The project is used in the FHIR connecthatons to develop, test and demonstrate the new features that are considered to become part of the FHIR standard. 

## Installation

(1) Clone the respository to a local directory.  
(2) Go to project folder and install dependencies.
 ```bash
 npm install
 ```
 (get a coffee - this might take a while)  
(3) Launch development server:
 ```bash
 npm start
 ```
(4)Launch the viewer in your browser using one of the following templates:
 * http://localhost:4333/fhir/?iss=<fhirserverurl&format=<format>
 * http://localhost:4333/fhir/<resourcetype?iss=<fhirserverurl&format=<format>
 * http://localhost:4333/fhir/<resourcetype/<resourceid>?iss=<fhirserverurl&format=<format>&subject=<subject>&patient=<patient>

where:
 * resourcetype = resource type of the resource
 * resourceid   = resouce id of the resource
 * fhirserverurl = the url of the fhir server to access
 * format  = the format used to display
    * struct = will render the resource in a table. All references in the table are clickable and load the referred resource.
	* nice = will render a human friendly representation when available
	* json = a json representation of the resource
	* perform = will be certain resources perform the default action and display the result: PlanDefinition.$apply, Questionnaire.$populate
 * subject = the value of the subject field to be used in an operation
 * patient = the value of the patient field to be used in an operation
	
	
## Project structure

````
dist/                        compiled version
e2e/                         end-to-end tests - currently unused
projects/ 	                 project source code
|- fhir2angular-stu3         clone of the fhir2angular-stu3 project containing protypes of FHIR resources
|- smartonfhir-stu3          set of utility functions to enable fhircast and smartonfhir support
|- fhirviewer-stu3           FHIR viewer for STU3 repositories
````

## Versioning

Versioning will be done with tags in the code. 

## Authors

* **Bas van den Heuvel** - *Main author* - [Philips Research](https://www.philips.com/a-w/research/home.html)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

See the [LICENSE](LICENSE) file for details

## Acknowledgments
* This work was not possible without the help and feedback of the members of the HL7 FHIR community

