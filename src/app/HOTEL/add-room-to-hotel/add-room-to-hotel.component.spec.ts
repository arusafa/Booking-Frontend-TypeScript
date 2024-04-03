import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomToHotelComponent } from './add-room-to-hotel.component';

describe('AddRoomToHotelComponent', () => {
  let component: AddRoomToHotelComponent;
  let fixture: ComponentFixture<AddRoomToHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRoomToHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRoomToHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
