import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private http: Http) { }

  addNewItem: Object = {};
  addSuccess: String = "New Item is added successfully!";
  added: boolean = false;

  addNew(item) {
    this.addNewItem = {
      "category": item.category,
      "subCategory": item.subCategory,
      "item": item.item
    }

    this.http.post("http://localhost:3000/items/", this.addNewItem)
    .subscribe(
      (response: Response) => {
        this.added = true;
      }
    )
  }

  ngOnInit() {
  }

}
