import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeRequestsPage } from './see-requests.page';

describe('SeeRequestsPage', () => {
  let component: SeeRequestsPage;
  let fixture: ComponentFixture<SeeRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeRequestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
