import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Provider } from '@angular/core';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {

  providers:[
    provideRouter([])
  ]
})
  .catch(err => console.error(err));
