import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { TranslateService, TranslatePipe } from '@ngx-translate/core'
import { EventService } from '../../services/event.service'
import { CommonModule } from '@angular/common'
import { Attendee } from '../../models/attendee.entity'
import { Event } from '../../models/event.entity'
@Component({
  selector: 'app-event-checks-in',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TranslatePipe
  ],
  templateUrl: './event-checks-in.component.html',
  styleUrls: ['./event-checks-in.component.css']
})
export class EventChecksInComponent {
  ticketIdentifier: string = ''
  resultMessage: string = ''
  checkedInData: { attendee: Attendee; event: Event } | null = null

  constructor(
    private eventService: EventService,
    private translate: TranslateService
  ) {}

  handleCheckIn() {
    this.resultMessage = ''
    this.checkedInData = null

    this.eventService.getAttendeeByTicket(this.ticketIdentifier).subscribe(attendee => {
      if (!attendee) {
        this.resultMessage = this.translate.instant('checkin.invalid')
        return
      }

      if (attendee.checkedInAt) {
        this.resultMessage = this.translate.instant('checkin.already')
        return
      }

      const now = new Date().toISOString()

      this.eventService.checkInAttendee(attendee.id, now).subscribe(() => {
        this.eventService.getEventById(attendee.eventId).subscribe(event => {
          this.checkedInData = {
            attendee: { ...attendee, checkedInAt: now },
            event
          }
        })
      })
    })
  }
}
