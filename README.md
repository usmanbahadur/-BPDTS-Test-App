
## BPDTS Angular App Structure


Main App Component 
Main page initiates and displays user’s data. It also contains getUsers() that contain two httpClient  get methods that loads JSON data.
•	First users by city   /city/{city}/users

•	Second method calls all users using httpClient get   https://bpdts-test-app.herokuapp.com/users after calling all users a distance calculation is performed with Harvesine’s formula that uses longitude, latitude calculation to filter users whose current coordinates are within 50 miles of London.

Model Component
Contains the current user’s data structure of BPDTS API.                    

API Service Component 
•	Two methods exist here first HttpClient to call the API, however the method could not be implemented due to CORS error as BPDTS API service is not configured to accepts call from all domains hence call from http://localhost:4200/ was blocked. 

•	Second method getDistanceFromLatLon() which calculates great-circle distances between the two points – that is, the shortest distance over the earth’s surface – using the ‘Haversine’ formula.


Assets  
Contain London user’s JSON data file and all users’ data. API was called using POSTMAN and then imported to the app./assets in JSON format. 
https://bpdts-test-app.herokuapp.com/users 
https://bpdts-test-app.herokuapp.com/city/London/users 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
