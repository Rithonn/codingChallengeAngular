import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleBarComponent } from './title-bar/title-bar.component';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import { BreweryListCardComponent } from './brewery-list-card/brewery-list-card.component';
import {GoogleMapsModule} from "@angular/google-maps";
import { GoogleMapsLayoutComponent } from './google-maps-layout/google-maps-layout.component';
import { MoreInfoComponent } from './more-info/more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    BreweryListCardComponent,
    GoogleMapsLayoutComponent,
    MoreInfoComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
