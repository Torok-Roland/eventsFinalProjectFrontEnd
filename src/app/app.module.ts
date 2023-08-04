import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventPageComponent } from './event-page/event-page.component';
import {HttpClientModule} from "@angular/common/http";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponentComponent } from './category-component/category-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    CategoryComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
