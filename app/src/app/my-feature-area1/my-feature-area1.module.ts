import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFeatureArea1RoutingModule } from './my-feature-area1-routing.module';
import { MyFeatureArea1Component } from './my-feature-area1.component';
import { MyFeature1Page2Component } from './my-feature1-page2/my-feature1-page2.component';

@NgModule({
  imports: [
    CommonModule,
    MyFeatureArea1RoutingModule
  ],
  declarations: [MyFeatureArea1Component, MyFeature1Page2Component]
})
export class MyFeatureArea1Module { }
