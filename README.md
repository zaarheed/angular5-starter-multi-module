# Angular 5 Starter (Multi-module)

A starter template for Angular 5 applications with multiple modules.

## Requirements

- Angular CLI v1.5.0
- Angular v5.1.0
- Typescript v2.4.2

# Demo
View a demo of the application [here](https://zuperm4n.github.io/angular5-starter-multi-module).

You can run a local demo by cloning this repo, running `npm install`, `ng serve` and then pointing your browser to `http://localhost:4200`.

# Documentation
Read more about the architecture [here](https://www.technouz.com/4644/angular-5-app-structure-multiple-modules/).

### FormModule
The `FormModule` represents a publicly accessible module which is lazy-loaded when the application is executed. There is no authorization required to view any of the pages or components within the `FormModule`. In a real-world application, the `FormModule` can be replaced with the core of the website which can be accessed by anyone - such as the homepage.

### CoreModule
The `CoreModule` drives the Angular application. It handles the API HTTP Interceptor, Authentication Guard and Authentication Service. In addition, the `CoreModule` holds the Login component, not-found component and the global Header component.

#### HeaderComponent

The `HeaderComponent` independently determines the route from the URL, and the permissions set in the User Authentication token, and then appropriately displays the links in the navigation bar.

### AdminModule

The `AdminModule` represents a privately accessible module which is lazy-loaded only upon successful user authentication via the `LoginComponent` and `AuthenticationService` in the `CoreModule`. In a real-world application the `AdminModule` would be the registered-user dasboard. In this demo, you can use any username and password to login.

### SharedModule

The `SharedModule` contains directives and components which may be used across multiple modules and areas of the application. A good example is the `RequiredLabelDirective` which adds an asterisk to an input label. This directive can be used all over the application including the `FormComponent` and `LoginComponent` which are in the `FormModule` and `CoreModule` respectively.

For a more detailed explanation on the architectural decisions made in this design, [read this article](https://www.technouz.com/4644/angular-5-app-structure-multiple-modules/).

# Features
- Multi-module architecture using Angular CLI conventions
- Core module, Shared module, 1x public module, 1x private module
- HTTP/API interceptor example
- Authentication guard example
- Shared directive example

# Upgrading to Angular 6
I have created a separate [GitHub repo for an Angular 6 Multi-Module Starter](https://github.com/zuperm4n/angular6-starter-multi-module/pull/1) for those who want a fresh template with the latest features (NgRx, feature toggles etc).

The steps below will allow you to upgrade any projects based from this starter template:

1. Switch from `HttpModule` and the `Http` service to `HttpClientModule` and the `HttpClient` service.

2. Make sure you are using Node 8 or later.

3. Update your Angular CLI globally and locally, and migrate the configuration to the new `angular.json` format by running the following:

    ```
    npm install -g @angular/cli
    npm install @angular/cli
    ng update @angular/cli
    ```

4. Update all of your Angular framework packages to v6, and the correct version of RxJS and TypeScript.

    ```
    ng update @angular/core
    ````

5. Use `ng update` or your normal package manager tools to identify and update other dependencies.

# Updating the demo
1. Install angular-cli-ghpages by running the command `npm install -g angular-cli-ghpages`
2. Build the Angular app and set the base-href by running the command: `ng build --prod --base-href "https://zuperm4n.github.io/angular5-starter-multi-module"`
3. Deploy to GitHub.io by running the `angular-cli-ghpages` tool (shorthand: `ngh`)