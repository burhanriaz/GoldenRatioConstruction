import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiAComponent } from './equi-a.component';

describe('EquiAComponent', () => {
  let component: EquiAComponent;
  let fixture: ComponentFixture<EquiAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
