import {Component, Input} from '@angular/core';
import {Event} from 'src/app/model/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css',
  ]

})
export class EventCardComponent {

  @Input()  //in cazul in care am pus () este o functie
  event: Event = {
    id: null,
    name: "",
    startDate: null,
    endDate: null,
    description: null,
    location: null,
    imgUrl: null,
  }
}
