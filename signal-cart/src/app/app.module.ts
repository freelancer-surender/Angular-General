import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CartComponent } from './cart/cart.component';
import { FruitsComponent } from './fruits/fruits.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { VegetablesComponent } from './vegetables/vegetables.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    CartComponent,
    FruitsComponent,
    HeaderComponent,
    ItemComponent,
    VegetablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
