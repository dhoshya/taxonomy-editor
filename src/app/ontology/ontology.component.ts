import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ontology',
  templateUrl: './ontology.component.html',
  styleUrls: ['./ontology.component.css']
})
export class OntologyComponent implements OnInit {

  buttonColor: string;

  constructor() {
    this.buttonColor = '#000';
   }

  showMe() {
    this.buttonColor = '#933';
  }

  revertMe(){
    this.buttonColor = '#000';
  }

  ngOnInit() {
  }

}
