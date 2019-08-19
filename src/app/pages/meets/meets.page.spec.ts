import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetsPage } from './meets.page';

describe('MeetsPage', () => {
  let component: MeetsPage;
  let fixture: ComponentFixture<MeetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
