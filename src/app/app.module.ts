import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventPageComponent } from './event-page/event-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponentComponent } from './category-component/category-component.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventCardComponent } from './event-card/event-card.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { NewEventPageComponent } from './new-event-page/new-event-page.component';
import { EventFormComponent } from './event-form/event-form.component';



@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    CategoryComponentComponent,
    EventsPageComponent,
    EventCardComponent,
    ConfirmationDialogComponent,
    NewEventPageComponent,
    EventFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
