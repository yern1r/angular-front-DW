import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './core/home/home-page/home-page/home-page.component';
import { HomePageHeaderComponent } from './core/home/home-page/header/home-page-header/home-page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
