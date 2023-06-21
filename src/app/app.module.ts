import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { ImagesComponent } from './images/images.component';
import { DescriptionComponent } from './description/description.component';
import { CountComponent } from './count/count.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    MobileMenuComponent,
    ImagesComponent,
    DescriptionComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
