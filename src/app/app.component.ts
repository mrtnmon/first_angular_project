import {Component} from '@angular/core';

import {ProductsService} from './products.service';
import {AddService} from './add.service';
import {BsJumbotronComponent} from './bs-jumbotron/bs-jumbotron.component';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <bs-jumbotron>
    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
    featured content or information.
  </bs-jumbotron>
  <products></products>
  <adds></adds>
  <input type="text" [(ngModel)]="title"/>
  <p></p>
  You have typed: {{title}}
    <app-rating></app-rating>
  `
  ,
  providers: [ProductsService, AddService, BsJumbotronComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Second app';
}
