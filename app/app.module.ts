import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { appRouter } from './routes';

import { MainModule } from './modules/main-module/module';
import { PublicModule } from './modules/public-module/module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule,
    FormsModule,
    MainModule.forRoot(),
    PublicModule,
    appRouter
  ],
  declarations: [ AppComponent ],
  exports: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
