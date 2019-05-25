import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDonorsPage } from './all-donors.page';

describe('AllDonorsPage', () => {
  let component: AllDonorsPage;
  let fixture: ComponentFixture<AllDonorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDonorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDonorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
