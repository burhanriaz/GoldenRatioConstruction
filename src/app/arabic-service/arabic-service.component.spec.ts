import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicServiceComponent } from './arabic-service.component';

describe('ArabicServiceComponent', () => {
  let component: ArabicServiceComponent;
  let fixture: ComponentFixture<ArabicServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArabicServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArabicServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
