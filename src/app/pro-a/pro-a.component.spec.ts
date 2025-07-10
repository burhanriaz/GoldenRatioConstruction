import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProAComponent } from './pro-a.component';

describe('ProAComponent', () => {
  let component: ProAComponent;
  let fixture: ComponentFixture<ProAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
