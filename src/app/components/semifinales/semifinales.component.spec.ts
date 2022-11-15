import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemifinalesComponent } from './semifinales.component';

describe('SemifinalesComponent', () => {
  let component: SemifinalesComponent;
  let fixture: ComponentFixture<SemifinalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemifinalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemifinalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
