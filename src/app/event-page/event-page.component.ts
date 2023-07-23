import {Component} from '@angular/core';
import {Event} from 'src/app/module/event';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent {
  event: Event = new Event(1,
    "Zilele Orasului Satu Mare",
    new Date(2024, 7, 23, 11, 0),
    new Date(2024, 7, 24, 12, 0),
    "Cel mai mare eveniment",
    "Satu Mare");

  httpClient: HttpClient;
  route : ActivatedRoute;
  constructor(httpClient: HttpClient, route: ActivatedRoute) {
    this.httpClient = httpClient;
    this.route = route;

  }

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get("id");
    this.httpClient.get("/api/events/" + eventId).subscribe((response) => {
      console.log(response);
      this.event = response as Event;
      this.event.startDate = new Date(this.event.startDate);
      this.event.endDate = new Date(this.event.endDate);
    })
  }

}


