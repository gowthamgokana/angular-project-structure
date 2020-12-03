import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabinetLayoutComponent } from './containers/cabinet-layout/cabinet-layout.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '',
    component: CabinetLayoutComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full'},  
    ]
  }
];

export const cabinetRouter = RouterModule.forChild(routes);