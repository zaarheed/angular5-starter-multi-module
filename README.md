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

# Features
- Multi-module architecture using Angular CLI conventions
- Core module, Shared module, 1x public module, 1x private module
- HTTP/API interceptor example
- Authentication guard example
- Shared directive example

# Updating the demo
1. Install angular-cli-ghpages by running the command `npm install -g angular-cli-ghpages`
2. Build the Angular app and set the base-href by running the command: `ng build --prod --base-href "https://zuperm4n.github.io/angular5-starter-multi-module"`
3. Deploy to GitHub.io by running the `angular-cli-ghpages` tool (shorthand: `ngh`)