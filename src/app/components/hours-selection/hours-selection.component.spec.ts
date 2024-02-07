import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursSelectionComponent } from './hours-selection.component';

describe('HoursSelectionComponent', () => {
  let component: HoursSelectionComponent;
  let fixture: ComponentFixture<HoursSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoursSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoursSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
