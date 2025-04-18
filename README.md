# XpPortfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

## Project Overview

XpPortfolio is a responsive portfolio application built with Angular. It includes features such as a mobile-friendly navigation menu, dynamic content rendering, and customizable components.

## Development Server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building the Project

To build the project, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running Unit Tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running End-to-End Tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

> **Note:** Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs, such as [Cypress](https://www.cypress.io/) or [Protractor](https://www.protractortest.org/).

## Adding a Favicon

To add a favicon to your project, place the favicon file (`logo.png`) in the `src/assets/images` directory and update the `index.html` file as follows:

```html
<link rel="icon" type="image/x-icon" href="assets/images/logo.png">
```

## Folder Structure

Here is an overview of the key folders in this project:

- **src/app**: Contains the main application code, including components, services, and modules.
- **src/app/web**: Stores static assets such as images, styles, and fonts.

## Deployment

To deploy the project, build it for production using:

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory. You can then deploy the contents of this directory to your web server or hosting platform.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

For Angular documentation and best practices, visit the [Angular Documentation](https://angular.io/docs).

---