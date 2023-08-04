import { Component } from '@angular/core';
import { Event } from 'src/app/module/event';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css',
  ]

})
export class EventCardComponent {

  event: Event = new Event(
    1,
    "Zilele Satmarului",
    new Date('2023-10-10'),
    new Date("2023.10.12"),
    "Ceva",
    "Satu Mare");
};
