import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NormalComponent } from './normal/normal.component';
import { SpecialComponent } from './special/special.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalComponent
  ],
  imports: [
    BrowserModule,
    SpecialComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
