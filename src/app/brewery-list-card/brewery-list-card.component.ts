import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-brewery-list-card',
  templateUrl: './brewery-list-card.component.html',
  styleUrls: ['./brewery-list-card.component.css']
})
export class BreweryListCardComponent implements OnInit{

  breweries: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any>(environment.apiUrl + '/breweries?by_city=york&by_state=Pennsylvania').subscribe(data => {
      this.breweries = data;
    });
  }
}
