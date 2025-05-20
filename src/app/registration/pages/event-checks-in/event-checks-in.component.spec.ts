import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventChecksInComponent } from './event-checks-in.component';

describe('EventChecksInComponent', () => {
  let component: EventChecksInComponent;
  let fixture: ComponentFixture<EventChecksInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventChecksInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventChecksInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
