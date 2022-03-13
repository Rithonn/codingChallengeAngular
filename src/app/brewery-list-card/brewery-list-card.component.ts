import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-brewery-list-card',
  templateUrl: './brewery-list-card.component.html',
  styleUrls: ['./brewery-list-card.component.css']
})
export class BreweryListCardComponent implements OnInit{

  readonly defaultSearch = environment.apiUrl + '/breweries?by_city=New York&by_state=New York'
  breweries: any;
  searchText: string = '';
  constructor(private http: HttpClient, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.http.get<any>(environment.apiUrl + '/breweries?by_city=New York&by_state=New York').subscribe(data => {
      this.breweries = data;
    });
  }
  searchBreweries(location: any){
    this.http.get<any>(environment.apiUrl + `/breweries?by_city=${location.city}&by_state=${location.state}`).subscribe(data => {
      this.breweries = data;
    });
  }

  resetSearch() {
    this.http.get<any>(environment.apiUrl + '/breweries?by_city=New York&by_state=New York').subscribe(data => {
      this.breweries = data;
    });
  }

  open(content: any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if(result){
        this.searchBreweries(result);
      }
    }).catch(error => {
      console.error(error);
      return;
    });
  }

}
