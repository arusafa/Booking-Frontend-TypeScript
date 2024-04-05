import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewARoomComponent } from './view-a-room.component';

describe('ViewARoomComponent', () => {
  let component: ViewARoomComponent;
  let fixture: ComponentFixture<ViewARoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewARoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewARoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
