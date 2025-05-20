import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs'
import { Event } from '../models/event.entity'
import { Attendee } from '../models/attendee.entity'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/events`)
  }

  getAttendees(): Observable<Attendee[]> {
    return this.http.get<Attendee[]>(`${this.baseUrl}/attendees`)
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/events/${id}`)
  }

  getAttendeeByTicket(ticketIdentifier: string): Observable<Attendee | null> {
    return this.http
      .get<Attendee[]>(`${this.baseUrl}/attendees?ticketIdentifier=${ticketIdentifier}`)
      .pipe(map(attendees => attendees[0] || null))
  }

  checkInAttendee(attendeeId: number, checkedInAt: string): Observable<any> {
    return this.http.patch(`${this.baseUrl}/attendees/${attendeeId}`, { checkedInAt })
  }

  getAttendeesByEvent(eventId: number): Observable<Attendee[]> {
    return this.http.get<Attendee[]>(`${this.baseUrl}/attendees?eventId=${eventId}`)
  }
}

