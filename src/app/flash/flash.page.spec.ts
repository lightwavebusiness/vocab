import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashPage } from './flash.page';

describe('FlashPage', () => {
  let component: FlashPage;
  let fixture: ComponentFixture<FlashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
