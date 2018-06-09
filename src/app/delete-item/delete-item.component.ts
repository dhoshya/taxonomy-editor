import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { OntologyComponent } from '../ontology/ontology.component';
import 'rxjs/add/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({
   'Content-Type': 'application/json'
 })
};


@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})

export class DeleteItemComponent implements OnInit {

  //@ViewChild(OntologyComponent) child;
  // id: string;
  items = [];
  deleteID: number;
  deleted: boolean = false;
  deleteSuccess: string = "The Item has been deleted";
  // private header = new Headers(
  //   {'content-type': 'application/json'}
  // );

  constructor(private http: Http, private httpClient: HttpClient) { }

  deleteItem(item) {

    this.deleteID = item.id;
    console.log(this.deleteID);
    if (confirm('Confirmation to Delete?')) {
      const url = `${"http://localhost:3000/items/"}${this.deleteID}`;
      console.log(url);
      return this.httpClient.delete(url, httpOptions)
      .toPromise()
      .then(() => {
        this.http.get('http://localhost:3000/items').subscribe(
          (response: Response) => {
            this.items = response.json();
          }
        )
        this.deleted = true;
      })
    }
  }

  ngOnInit() {
  }

}
