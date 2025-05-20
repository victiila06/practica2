import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { EventSummaryComponent } from '../../../shared/components/event-summary/event-summary.component';
import { NgForOf } from '@angular/common';
import { EventService } from '../../../registration/services/event.service';
import { Event } from '../../../registration/models/event.entity';
import { Attendee } from '../../../registration/models/attendee.entity';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslatePipe,
    EventSummaryComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  events: Event[] = [];
  attendees: Attendee[] = [];
  eventPairs: Event[][] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      this.groupEventsByPairs();
    });

    this.eventService.getAttendees().subscribe(attendees => {
      this.attendees = attendees;
    });
  }

  getAttendeesForEvent(eventId: number): Attendee[] {
    return this.attendees.filter(a => a.eventId === eventId);
  }

  private groupEventsByPairs(): void {
    this.eventPairs = [];
    for (let i = 0; i < this.events.length; i += 2) {
      this.eventPairs.push(this.events.slice(i, i + 2));
    }
  }
}
