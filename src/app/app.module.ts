import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { UiMaterialModules } from './ui-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [
  UsersModule,
  UiMaterialModules,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    modules
  ],
  exports: [modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
