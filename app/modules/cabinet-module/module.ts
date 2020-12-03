// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Vendor

// Routes
import { cabinetRouter } from './routes';

// Containers
import { CabinetLayoutComponent } from './containers/cabinet-layout/cabinet-layout.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

// Components

@NgModule({
  declarations: [
    CabinetLayoutComponent,
    DashboardComponent
  ],
  imports: [
    cabinetRouter,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
  ],
  providers: [],
})
export class CabinetModule {}
