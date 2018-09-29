# FHIR viewer

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
(3) Launch development server, and open `localhost:4200` in your browser:
 ```bash
 npm start
 ```

## Getting started
(1) Start application:
```bash
 npm start
 ```
(2)Enter the address of the FHIR Server (will be stored locally) and press enter.
(3)Select the FHIR server to use.

## Project structure

```
dist/                        compiled version
e2e/                         end-to-end tests - currently unused
src/                         project source code
|- app/                      app components
|  |- components/            viewer components
|  |  |- resource-display/*  set of angular classes that display the contents of FHIR classes
|  |  |- *                   various support components 
|  |- fhir/                  output of generateJs
|  |  |- dstu2               FHIR dstu2 files 
|  |  |- dstu3               FHIR dstu3 files
|  |  |- r4                  FHIR r4 files
|  |- fhir-util/             Smart On Fhir service, context service
|  |  |- dstu3-util          Utility functions on dstu3 classes.
|  |- material/              Module file to include Angular Material
|  |- models
|  |- services/              Services that check current state.
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
|- styles.sass               injects angular material styles
+- test.ts                   unit tests entry point (currently unused)
...
```

## Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

Tasks                         | Description
------------------------------|---------------------------------------------------------------------------------------
npm start                     | Run development server on `http://localhost:4200/`
npm run build [-- --env=prod] | Build app for production in `dist/` folder
npm run docs                  | Display project documentation

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.


## Contributing

Please read [CONTRIBUTING.md](https://xxx) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

Versioning will be done with tags in the code. 

## Authors

* **Bas van den Heuvel** - *Main author* - [Philips Research](https://www.philips.com/a-w/research/home.html)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* This work was not possible without the help and feedback of the members of the HL7 FHIR community

