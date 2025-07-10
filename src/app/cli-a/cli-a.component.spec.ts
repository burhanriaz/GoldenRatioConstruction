import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliAComponent } from './cli-a.component';

describe('CliAComponent', () => {
  let component: CliAComponent;
  let fixture: ComponentFixture<CliAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CliAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
