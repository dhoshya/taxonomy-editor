import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  id: number;
  updateID: number;
  updateData: Object = {};
  items = [];
  enteredData: Object = {};
  updated: boolean = false;
  private header = new Headers(
    {'Content-Type' : 'application/json'}
  );

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: Http) { }

  updateItem(item) {
    console.log(item.id);
    this.enteredData = {
      id: item.id,
      item: item.item,
      category: item.category,
      subCategory: item.subCategory
    }
    const url = `${"http://localhost:3000/items/"}${item.id}`;
    this.http
    .put(url, JSON.stringify(this.enteredData), {headers:this.header})
    .toPromise()
    .then(() => {
      this.http.get('http://localhost:3000/items').subscribe(
        (response: Response) => {
          this.items = response.json();
        }
      )
      this.updated = true;
    });
  }

  ngOnInit() {
  //   this.route.params.subscribe(params=>{
  //   this.id =+ params['id'];
  // });
  // this.http.get('http://localhost:3000/items').subscribe(
  //   (res: Response) => {
  //     this.items = res.json();
  //     for( var i=0;i<this.items.length; i++) {
  //       if(parseInt(this.items[i].id) === this.id) {
  //         this.updated = true;
  //         this.updateData = this.items[i];
  //         break;
  //       } else {
  //         this.updated = true;
  //       }
  //     }
  //
  //   }
  // )
  }
}
