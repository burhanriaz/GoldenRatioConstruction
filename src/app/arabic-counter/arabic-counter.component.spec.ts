import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicCounterComponent } from './arabic-counter.component';

describe('ArabicCounterComponent', () => {
  let component: ArabicCounterComponent;
  let fixture: ComponentFixture<ArabicCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArabicCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArabicCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
