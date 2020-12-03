// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Vendor
import { MainModule } from '../main-module/module';

// Routes
import { publicRouter } from './routes';

// Containers
import { LandingComponent } from './containers/landing/landing.component';


// Components

@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    MainModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    publicRouter
  ],
  exports: [],
  providers: [],
})
export class PublicModule {}
