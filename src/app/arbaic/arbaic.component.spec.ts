import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbaicComponent } from './arbaic.component';

describe('ArbaicComponent', () => {
  let component: ArbaicComponent;
  let fixture: ComponentFixture<ArbaicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbaicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
