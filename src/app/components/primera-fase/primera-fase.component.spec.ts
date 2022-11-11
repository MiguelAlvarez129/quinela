import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraFaseComponent } from './primera-fase.component';

describe('PrimeraFaseComponent', () => {
  let component: PrimeraFaseComponent;
  let fixture: ComponentFixture<PrimeraFaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraFaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeraFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
