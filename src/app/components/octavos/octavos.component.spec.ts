import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctavosComponent } from './octavos.component';

describe('OctavosComponent', () => {
  let component: OctavosComponent;
  let fixture: ComponentFixture<OctavosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctavosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctavosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
