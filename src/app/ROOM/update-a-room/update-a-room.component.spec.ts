import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateARoomComponent } from './update-a-room.component';

describe('UpdateARoomComponent', () => {
  let component: UpdateARoomComponent;
  let fixture: ComponentFixture<UpdateARoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateARoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateARoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
