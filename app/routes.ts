import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './modules/public-module/module#PublicModule', data: {preload: true} },
  { path: 'cabinet', loadChildren: './modules/cabinet-module/module#CabinetModule', data: {preload: true} },
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(routes);