import {Component} from '@angular/core';
import {Event} from "../model/event";
import {FormGroup, FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  constructor(private httpClient:HttpClient) {

  }

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
    descriptionInputFormControl: new FormControl(),
    locationInputFormControl: new FormControl(),
    imgUrlInput: new FormControl(),
    startDateInput: new FormControl(),
    endDateInput: new FormControl

  });

  saveEvent() {
    this.populateEventFromForm();
    this.httpClient.post("/api/events", this.event)
      .subscribe((response)=>{
      alert(JSON.stringify(response));
    });
  }

  populateEventFromForm() {
    this.event.name = this.eventForm.value.nameInputFormControl;
    this.event.description = this.eventForm.value.descriptionInputFormControl;
    this.event.location = this.eventForm.value.locationInputFormControl;
    this.event.imgUrl = this.eventForm.value.imgUrlInput;
    this.event.startDate = this.eventForm.value.startDateInput;
    this.event.endDate = this.eventForm.value.endDateInput;
  }
}
