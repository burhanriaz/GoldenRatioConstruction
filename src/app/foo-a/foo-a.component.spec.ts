import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooAComponent } from './foo-a.component';

describe('FooAComponent', () => {
  let component: FooAComponent;
  let fixture: ComponentFixture<FooAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
