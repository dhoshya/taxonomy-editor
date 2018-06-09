import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-ontology',
  templateUrl: './ontology.component.html',
  styleUrls: ['./ontology.component.css']
})

export class OntologyComponent implements OnInit {

  items = [];
  id: number;

  constructor(private http: Http) { }

  getItems() {
    this.http.get('http://localhost:3000/items')
    .subscribe(
      (response: Response) => {
        this.items = response.json();
      }
    )
  }


  ngOnInit() {
    this.getItems();
  }

}
