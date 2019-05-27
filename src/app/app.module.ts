import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { FormsModule } from '@angular/forms';
import { CompDetailComponent } from './comp-detail/comp-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    CompDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
