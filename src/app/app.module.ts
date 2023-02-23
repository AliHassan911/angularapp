import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, HttpUrlGenerator } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { CustomurlHttpGenerator } from './shared/store/customurl-http-generator';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    MatToolbarModule,
    MatButtonModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
     {
      provide : HttpUrlGenerator,
      useClass : CustomurlHttpGenerator
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
