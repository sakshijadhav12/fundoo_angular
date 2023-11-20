import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistrationComponent } from './resistration.component';

describe('ResistrationComponent', () => {
  let component: ResistrationComponent;
  let fixture: ComponentFixture<ResistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistrationComponent]
    });
    fixture = TestBed.createComponent(ResistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
