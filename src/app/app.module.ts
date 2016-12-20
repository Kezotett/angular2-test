import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonAppComponent } from './person-app/person-app.component';
import { PersonService } from './person.service';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PersonAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    PersonService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
