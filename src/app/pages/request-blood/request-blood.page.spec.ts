import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBloodPage } from './request-blood.page';

describe('RequestBloodPage', () => {
  let component: RequestBloodPage;
  let fixture: ComponentFixture<RequestBloodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestBloodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBloodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
