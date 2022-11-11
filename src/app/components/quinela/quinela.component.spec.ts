import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinelaComponent } from './quinela.component';

describe('QuinelaComponent', () => {
  let component: QuinelaComponent;
  let fixture: ComponentFixture<QuinelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuinelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
