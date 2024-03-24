import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { ColorDirective } from './directives/color.directive';
import { BoxDirective } from './directives/box.directive';
import { BorderDirective } from './directives/border.directive';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
  ],
  imports: [
    BrowserModule,
    ColorDirective,
    BoxDirective,
    BorderDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
