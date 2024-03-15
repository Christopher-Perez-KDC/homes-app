import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
bootstrapApplication(AppComponent, {

  providers:[
    provideRouter(routeConfig)
  ]
})
  .catch(err => console.error(err));
