import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountSComponent } from './count-s.component';

describe('CountSComponent', () => {
  let component: CountSComponent;
  let fixture: ComponentFixture<CountSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
