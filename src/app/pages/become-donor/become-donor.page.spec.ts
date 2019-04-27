import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeDonorPage } from './become-donor.page';

describe('BecomeDonorPage', () => {
  let component: BecomeDonorPage;
  let fixture: ComponentFixture<BecomeDonorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeDonorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeDonorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
