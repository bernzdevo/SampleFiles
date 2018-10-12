import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Add this by executing 
// npm install angular-6-datatable --save
import { DataTableModule} from 'angular-6-datatable';

import {HttpClientModule} from '@angular/common/http';

//translate
import {TranslateModule} from "ng2-translate";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpClientModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
