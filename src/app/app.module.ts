import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppSearchBox } from './app.searchBox';

import {MatButtonModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppSearchBox
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppSearchBox]
})
export class AppModule { }
