import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {HomeComponent} from './home/home.component';


export const routing = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: '**', component: NotfoundComponent},
  {path: 'main', component: AppComponent}
]);
