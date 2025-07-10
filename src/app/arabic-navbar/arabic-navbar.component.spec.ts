import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicNavbarComponent } from './arabic-navbar.component';

describe('ArabicNavbarComponent', () => {
  let component: ArabicNavbarComponent;
  let fixture: ComponentFixture<ArabicNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArabicNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArabicNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
