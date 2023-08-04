import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventPageComponent} from "./event-page/event-page.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {CategoryComponentComponent} from "./category-component/category-component.component";
import {EventsPageComponent} from "./events-page/events-page.component";

const routes: Routes = [
  {
    path: "events/:id", component: EventPageComponent
  },
  {path: "events", component: EventsPageComponent},
  {
    path: "not-found", component: NotFoundPageComponent
  },
  {
    path: "categories", component: CategoryComponentComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
