import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicProjectComponent } from './arabic-project.component';

describe('ArabicProjectComponent', () => {
  let component: ArabicProjectComponent;
  let fixture: ComponentFixture<ArabicProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArabicProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArabicProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
