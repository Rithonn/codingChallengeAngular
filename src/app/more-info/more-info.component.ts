import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  brewery_id: string | undefined;
  brewery: any =  {};
  readonly ROOT_URL = 'https://api.openbrewerydb.org/breweries'
  latitude: number = 0;
  longitude: number = 0;
  loadData: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.brewery_id = params['id'];
    });

    //Get In depth details of brewery that was clicked
    //https://api.openbrewerydb.org/breweries/
    this.http.get<any>(this.ROOT_URL + '/' + this.brewery_id).subscribe(data => {
      this.brewery = data;
      this.latitude = parseFloat(this.brewery.latitude);
      this.longitude = parseFloat(this.brewery.longitude);
      this.loadData = true;
    });
  }

}
