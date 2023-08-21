import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventPageComponent} from "./event-page/event-page.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {CategoryComponentComponent} from "./category-component/category-component.component";
import {EventsPageComponent} from "./events-page/events-page.component";
import {NewEventPageComponent} from "./new-event-page/new-event-page.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {LoginFormPageComponent} from "./login-form-page/login-form-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {
    path: "events/:id", component: EventPageComponent
  },
  {path: "events", component: EventsPageComponent},
  {
    path: "not-found", component: NotFoundPageComponent
  },
  {
    path: "categories", component: CategoryComponentComponent
  },
  {
    path: "new-event", component: NewEventPageComponent
  },
  {
    path: "register", component: RegisterFormComponent
  },
  {
    path: "login", component: LoginFormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
