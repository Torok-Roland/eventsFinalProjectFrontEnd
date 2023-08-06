import {Component} from '@angular/core';
import {Event} from 'src/app/model/event';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent {
  event: Event = new Event(
    null,
    null,
    null,
    null,
    null,
    null);

  httpClient: HttpClient;
  route: ActivatedRoute;

  constructor(httpClient: HttpClient, route: ActivatedRoute, private router: Router) {
    // daca declar un field privat in consturctor nu mai trebuie sa-l declar inainte de constructor vezi httpClient si route
    this.httpClient = httpClient;
    this.route = route;

  }

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get("id");
    this.httpClient.get("/api/events/" + eventId).subscribe((response) => {
      console.log(response);
      this.event = response as Event;
      if (this.event.startDate != null)
        this.event.startDate = new Date(this.event.startDate);
      if (this.event.endDate != null)
        this.event.endDate = new Date(this.event.endDate);
    }, (error) => {
      console.log(error);
      if (error.error == ("There it is no event with id:" + eventId)) {
        this.router.navigate(["/not-found"])
      }
    })
  }

}


