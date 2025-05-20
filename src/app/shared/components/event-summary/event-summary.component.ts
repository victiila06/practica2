import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Event} from '../../../registration/models/event.entity';
import { Attendee } from '../../../registration/models/attendee.entity';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-event-summary',
  standalone: true,
  imports: [CommonModule, MatCardModule, TranslatePipe],
  templateUrl: './event-summary.component.html',
  styleUrls: ['./event-summary.component.css']
})
export class EventSummaryComponent {
  @Input() event!: Event;
  @Input() attendees: Attendee[] = [];
  registeredCount = 0;
  attendancePercentage = 0;

  ngOnChanges(): void {
    this.registeredCount = this.attendees.length;

    const checkedInCount = this.attendees.filter(a => !!a.checkedInAt).length;

    this.attendancePercentage = this.registeredCount > 0
      ? Math.round((checkedInCount / this.registeredCount) * 100)
      : 0;
  }
}
