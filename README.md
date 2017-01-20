Angular 2 CLI demo 1

# An Opinionated Introduction to Angular 2 CLI

## Introduction
This is an opinionated guide to my favourite opinionated framework's CLI.

I've created this because everything else I've found is currently out of date or incomplete. Though I'm sure that'll change as soon as the Angular 2 CLI goes final.

My inspiration for creating this document comes from...  

> The Ultimate Angular CLI Reference Guide  
> https://www.sitepoint.com/ultimate-angular-cli-reference 

...well worth a read, but the routing stuff in it is currently out of date.


## Prerequisites

* node v6.9.4 LTS
(v7.4.0 Current - has created problems in the past, but not sure if latest Angular CLI now works - feel free to try, but if errors when you use the "new" command below, then revert to 6.9.4 LTS)

* Visual Studio Code

## Install the CLI for the first time
```
npm install -g angular-cli@latest
```
Note: this operation takes a long time on a slow internet - it downloads hundreds of NPM packages

## Check your CLI version
```
ng --version
```
(at time of this document: 1.0.0-beta.25.5)

## Update your CLI to the latest version
```
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@latest
```
Note: this operation takes a long time on a slow internet - it downloads hundreds of NPM packages

## Create your project
```
ng new myProjectName --routing
```
Note: this operation takes a long time on a slow internet - creating a new project downloads hundreds of NPM packages

* --routing parameter creates an optional routing module in our project

* The app.component files created will become the shell to contain our routed sub-page components

## Browse your new project
```
cd myProjectName

ng serve
 ```
This runs a mini CLI web server on port 4200
Open your browser and go to http://localhost:4200/
You should see a basic HTML page with title "app works!"

## Open your project in Visual Studio Code
```
File -> Open Folder -> (browse to your project location) -> Select Folder
```
Most of the files you will edit are within the "src" folder
Config files for the project are outside of the "src" folder in the root of your project
Make edits and automatically see updates in your browser when you save 

## Stop the CLI web server to run other CLI commands - or open a new command window

Most CLI commands you can get away with opening another command window and still leave the CLI web server running in the first command window
```
CTRL + C 
```
(Control + Break)
```
"Terminate batch job (Y/N)?" -> Y
```

## Create a basic page component

Components can be child components of a parent - a bit like element directives in Angular 1. But in this opinionated example we're just creating a page we can route to
```
ng generate component my-start-page
```
Then edit app-routing.module.ts ...
```javascript
import { MyStartPageComponent } from './my-start-page/my-start-page.component'; // *** inserted line

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home', }, // *** edited line
  { path: 'home', component: MyStartPageComponent }     // *** inserted line
];
```
Now you can add other basic pages and route to them using this format

## Create a PageNotFoundComponent
```
ng generate component page-not-found
```
Then edit app-routing.module.ts ... (assumes you have created a basic page component in the step above)
```javascript
import { MyStartPageComponent } from './my-start-page/my-start-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home', },
  { path: 'home', component: MyStartPageComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }   // *** inserted line
];
```

## Services
Services - (like Angular 1)
* are the best place to put globall variables / objects / functions
* are the best place to talk to servers with http, etc.
```
ng generate service my-new-service
```
I'm creating my service here in the root so that it is referenced by the app.module - which will make it available to all my modules.
We have to register the service as a provider in the app.module to make it available to all components...
```javascript
import { MyNewServiceService } from './my-new-service.service'  // *** inserted line

@NgModule({
  declarations: [
    AppComponent,
    MyStartPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MyNewServiceService],     // *** edited line
  bootstrap: [AppComponent]
})
```

## Create a module 

Use Modules to organise feature areas of your app
```
ng generate module my-feature-area1 --routing
```
--routing parameter creates an optional routing module for child routes in your feature area module

Next edit my-feature-area1-routing.module.ts
```javascript	
import { MyFeatureArea1Component } from './my-feature-area1.component';  // *** inserted line

const routes: Routes = [
  { path: 'feature1', component: MyFeatureArea1Component }  // *** inserted line
];
```
Then edit app.module.ts ... 
```javascript	
import { MyFeatureArea1Module } from './my-feature-area1/my-feature-area1.module';  // *** inserted line

@NgModule({
  declarations: [
AppComponent,
MyStartPageComponent,
PageNotFoundComponent
  ],
  imports: [
BrowserModule,
FormsModule,
HttpModule,
MyFeatureArea1Module,   // *** inserted line 
                        // note that it appears before AppRoutingModule 
                        // so child routes are hit before default route
AppRoutingModule
  ],
  providers: [MyNewServiceService],
  bootstrap: [AppComponent]
})
```

## Create another basic page component inside your new feature area
This is the really cool bit about the CLI; by changing the context (folder) you run the command from, the CLI alters *the most local parent module file* - in this case, *MyFeatureArea1Module*
```
cd my-feature-area1

ng generate component my-feature1-page2
```
Then edit my-feature-area1-routing.module.ts ...
```javascript	
import { MyFeature1Page2Component } from './my-feature1-page2/my-feature1-page2.component';  // *** inserted line

const routes: Routes = [
  { path: 'feature1', component: MyFeatureArea1Component },
  { path: 'feature1page2', component: MyFeature1Page2Component }  // *** inserted line
];
```

## Deployment
This is another really cool CLI bit.
If you've ever spent too much time writing scripts for Grunt, Gulp, (Burp or Fart), you don't have to anymore...
That is, if you don't mind an opinionated uglified, minified deployment... (which I'm happy to accept)

```
ng build --prod
```
- or...
```
ng build --prod –-aot
```
Note: CLI AOT currently doesn't work with Lazy Loading
(I also gather that this parameter is for demo only - future versions of --build will all be AOT by default once the CLI goes final)

Have fun!

















