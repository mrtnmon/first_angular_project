import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ProductsComponent} from './products.component';
import {AddComponent} from './add.component';
import {RatingComponent} from './rating/rating.component';
import {ProductComponent} from './product/product.component';
import {BsJumbotronComponent} from './bs-jumbotron/bs-jumbotron.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent, ProductsComponent, AddComponent, RatingComponent, ProductComponent, BsJumbotronComponent, NotfoundComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
