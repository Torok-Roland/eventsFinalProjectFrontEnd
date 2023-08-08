import {Component} from '@angular/core';
import {Event} from "../model/event";
import{FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {

  event: Event = {
    id: null,
    name: "",
    startDate: null,
    endDate: null,
    description: null,
    location: null,
    imgUrl: null,
  }
  // un container pentru toate casutele de input
  eventForm: FormGroup = new FormGroup({
    nameInputFormControl: new FormControl(),
    descriptionInputFormControl : new FormControl(),
    locationInputFormControl : new FormControl(),
    imgUrlInput: new FormControl()

  });
}
