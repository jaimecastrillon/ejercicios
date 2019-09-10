import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesListPage } from './sites-list.page';

describe('SitesListPage', () => {
  let component: SitesListPage;
  let fixture: ComponentFixture<SitesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
