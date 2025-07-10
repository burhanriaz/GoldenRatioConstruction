import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicnarComponent } from './arabicnar.component';

describe('ArabicnarComponent', () => {
  let component: ArabicnarComponent;
  let fixture: ComponentFixture<ArabicnarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArabicnarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArabicnarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
