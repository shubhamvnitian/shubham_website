import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAchivementComponent } from './all-achivement.component';

describe('AllAchivementComponent', () => {
  let component: AllAchivementComponent;
  let fixture: ComponentFixture<AllAchivementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllAchivementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAchivementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
