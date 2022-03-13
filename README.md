# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## My Notes

Ran into an issue linking the project with the web api that I was building. Angular and possible .net core have issues playing nicely
with "Same Origin" Policy and CORS. I know there are work arounds by adding configuration exceptions to the project but I am
unsure if I will have to the time to get to it. 

I am also aware that the project currently at the time of writing this does not include any services to handle the web requests
to the api. I didn't think they were needed for the short lived expectancy of the project and the very minimal requests that were being done

Google Maps play nicely with this updated directory (https://www.npmjs.com/package/@angular/google-maps) The one provided in the challenge did not work
at the time of using it due to outdated libraries

### Would like to do or have done

- Add search functionality to bars

- Add pagination

- Add web api that I built

