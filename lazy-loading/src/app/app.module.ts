import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { DashboardOneModule } from './dashboard-one/dashboard-one.module';
// import { DashboardTwoModule } from './dashboard-two/dashboard-two.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DashboardOneModule,
    // DashboardTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
