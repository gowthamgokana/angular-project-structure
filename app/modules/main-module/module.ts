// Angular
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Vendor

// Routes
import { mainRouter } from './routes';

// Containers

// Components
import { HelloComponent } from './components/hello/hello.component';

@NgModule({
  declarations: [
    HelloComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    mainRouter
  ],
  exports: [
    HelloComponent
  ],
  providers: [],
})
export class MainModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: MainModule
    };
  }
}
