/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyFeatureArea1Component } from './my-feature-area1.component';

describe('MyFeatureArea1Component', () => {
  let component: MyFeatureArea1Component;
  let fixture: ComponentFixture<MyFeatureArea1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFeatureArea1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFeatureArea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
