import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFeatureArea1Component } from './my-feature-area1.component';
import { MyFeature1Page2Component } from './my-feature1-page2/my-feature1-page2.component';

const routes: Routes = [
  { path: 'feature1', component: MyFeatureArea1Component },
  { path: 'feature1page2', component: MyFeature1Page2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MyFeatureArea1RoutingModule { }
