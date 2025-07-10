import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicHomeComponent } from './arabic-home.component';

describe('ArabicHomeComponent', () => {
  let component: ArabicHomeComponent;
  let fixture: ComponentFixture<ArabicHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArabicHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArabicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
