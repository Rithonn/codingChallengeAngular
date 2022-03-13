import {Component, Input, OnInit} from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-google-maps-layout',
  templateUrl: './google-maps-layout.component.html',
  styleUrls: ['./google-maps-layout.component.css']
})
export class GoogleMapsLayoutComponent implements OnInit {

  @Input() Longitude = 0;
  @Input() Latitude = 0;
  apiLoaded: any;

  constructor(private httpClient: HttpClient) {

  }
  //Initializer for the options
  options: google.maps.MapOptions = {
    center: {lat: this.Latitude, lng: this.Longitude}
  };

  ngOnInit(): void {
    //TODO: remove key and store somewhere else that is safer
    this.apiLoaded = this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?AIzaSyB0BeRcrbhtQX_4wciqp1anUbiJGg5Ay4o', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );

    //Update the options with the passed in values
    this.options = {
      center: {lat: this.Latitude, lng: this.Longitude}
    }

  }

}
