/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyFeature1Page2Component } from './my-feature1-page2.component';

describe('MyFeature1Page2Component', () => {
  let component: MyFeature1Page2Component;
  let fixture: ComponentFixture<MyFeature1Page2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFeature1Page2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFeature1Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
