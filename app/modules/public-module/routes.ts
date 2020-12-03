import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './containers/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent}
];

export const publicRouter = RouterModule.forChild(routes);