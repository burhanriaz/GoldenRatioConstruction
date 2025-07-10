import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServAComponent } from './serv-a.component';

describe('ServAComponent', () => {
  let component: ServAComponent;
  let fixture: ComponentFixture<ServAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
